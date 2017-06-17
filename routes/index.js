import express from 'express';
import User from './model/user';
import passport from 'passport';
//import {Strategy} from 'passport-local';
//const localStrategy = require('passport-local').Strategy;
const facebookStrategy = require('passport-facebook').Strategy;

const router = express.Router();

const FBID = "1903068639981358";
const Secret = "b55a7aec56ce95e2e21fabab66b4321c";

/*
 * Serialize and deserialize user
 * via cookie
*/
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findbyId(id, (err, user) => {
    done(err, user);
  });
});

/*Facebook login*/
passport.use(new FacebookStrategy({
    clientID: '1903068639981358',
    clientSecret: 'b55a7aec56ce95e2e21fabab66b4321c',
    callbackURL: '/auth/facebook/callback',
    profileFields: ['public_profile'],
    passReqToCallback: true
  }, (req, accessToken, refreshToken, profile, done) => {
    console.log(profile);
  }
));

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email', 'public_profile']}));
router.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/login'}), (req, res) => {
  res.redirect('/secret');
});

export default router;
