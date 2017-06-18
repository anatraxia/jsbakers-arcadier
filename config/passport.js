
// Load passport local
var localStrategy = require('passport-local').Strategy;
var facebookStrategy = require('passport-facebook').Strategy;
var googleStrategy = require('passport-google-oauth20').Strategy;


// Load validator
var validator = require('validator');

// Load user model
var User = require('../models/user');

module.exports = function( passport ) {

  // Serialize user
  passport.serializeUser( function( user, done){
      done(null, user.id);
  });

  // Deserialize user
  passport.deserializeUser(function(id, done){
      User.findById(id, function(err, user){
        done(err, user);
      });
  });

  // Passport signup
  passport.use('local-signup', new localStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback: true
    },
    function( req, email, password, done){

        // Check that the email is in the right format
        if( !validator.isEmail(email) ){
          return done(null, false, req.flash('loginMessage','That is not a valid email address'));
        }

        // Check that the password is at least 8 chars
        if( password.length < 8 ){
          return done(null, false, req.flash('loginMessage','The password needs to be 8 chars long'));
        }

        process.nextTick(function(){
          User.findOne( {'local.email' : email }, function(err, user){
            if(err){
              return done(err);
            }
            if(user){
              return done(null, false, req.flash('loginMessage','That email is already in use'));
            }else{
              var newUser = new User();
              newUser.local.email = email;
              newUser.local.password = password;
              newUser.save(function(err){
                if(err){
                  console.log(err);
                }
                return done(null, newUser, req.flash('loginMessage', 'Logged in successfully'));
              });
            }
          });
        });
    }));

  // Passport login
  passport.use('local-login', new localStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback: true
    },
    function( req, email, password, done){
        process.nextTick(function(){
          User.findOne( {'local.email' : email }, function(err, user){
            if(err){
              return done(err);
            }

            if(!user){
              return done(null,false, req.flash('loginMessage', 'sorry no one by that email'));
            }

            user.validPassword(password, function(err, isMatch){

              if(isMatch){
                return done(null, user, req.flash('loginMessage', 'Logged in successfully'));
              }

              return done(null,false, req.flash('loginMessage', 'sorry wrong password'));
            })
          });
        });
    }));

    //passport facebook loginMessage
    // Passport facebook login
    passport.use('facebook', new facebookStrategy({
        clientID: '312321872530129',
        clientSecret: '6287d36f6563f07be97fe11474329c8c',
        callbackURL: 'https://jsbakers-arcadier.herokuapp.com/auth/facebook/callback',
        profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
        passReqToCallback: true
      },
      function( req, accessToken, refreshToken, profile, done){
          console.log(profile);

          User.findOne( {'facebook.id' : profile.id }, function(err, user){
            if(err){
              return done(err);
            }

            if(!user){

              var newUser = new User();
              newUser.facebook.id = profile.id;
              newUser.facebook.token = accessToken;
              newUser.facebook.name = profile.first_name + ' ' +  profile.middle_name + ' ' + profile.last_name;
              newUser.facebook.email = profile.email;
              newUser.save(function(err){
                if(err){
                  console.log(err);
                }
                return done(null, newUser, req.flash('loginMessage', 'Logged in successfully'));
              });
            }

            if(user) {
                return done(null, user, req.flash('loginMessage', 'Logged in successfully'));
            }
          });
      }
    ));

    /**
     * Sign in with Google.
     */
    //  passport.use(new googleStrategy({
    //      clientID: '649678865382-vvcrqv0dnui7hqcipf8ngpqb0736ueof.apps.googleusercontent.com',
    //      clientSecret: 'ZRVXE7vsQNVfF_D6_lf-wTKR',
    //      callbackURL: "http://localhost:3000/auth/google/callback",
    //      passReqToCallback: true
    //    },
    //    function(req, accessToken, refreshToken, profile, cb) {
    //      User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //        return cb(err, user);
    //      });
    //    }
    //  ));

  passport.use('google', new googleStrategy({
    clientID: '649678865382-vvcrqv0dnui7hqcipf8ngpqb0736ueof.apps.googleusercontent.com',
    clientSecret: 'mlcFYyIxzqYXRgf6ZUd_RzJj',
    callbackURL: 'https://jsbakers-arcadier.herokuapp.com/auth/google/callback',
    passReqToCallback: true
    },
    function( req, accessToken, refreshToken, profile, done){
        console.log(profile);

        User.findOne( {'google.id' : profile.id }, function(err, user){
          if(err){
            return done(err);
            console.log(err);
          }

          console.log(err);
          if(!user){

            var newUser = new User();
            newUser.google.id = profile.id;
            newUser.google.token = accessToken;
            newUser.google.name = profile.first_name + ' ' +  profile.middle_name + ' ' + profile.last_name;
            newUser.google.email = profile.email;
            newUser.save(function(err){
              if(err){
                console.log(err);
              }
              return done(null, newUser, req.flash('loginMessage', 'Logged in successfully'));
            });
          }

          if(user) {
              return done(null, user, req.flash('loginMessage', 'Logged in successfully'));
          }
        });
    }
  ));


    }
