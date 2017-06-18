import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
var cors = require('cors')
// import favicon from 'serve-favicon';
import path from 'path';
import lessMiddleware from 'less-middleware';
import index from './routes/index';
import passport from 'passport';
import flash from 'connect-flash';
import session from 'express-session';
import mongoose from 'mongoose';
const app = express();
const debug = Debug('jsbakers-arcadier:app');
<<<<<<< HEAD
const Swagger = require('swagger-client')
=======
const Swagger = require('swagger-client');

// Connect with Mongo DB
mongoose.connect('mongodb://localhost/node-template');

// Init middel-ware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files
app.use(express.static(path.join(__dirname, '/public')));
>>>>>>> ec649aada2b5352d5802ea3a54e0dd227c2a5004

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Setup sessions
app.use(session( { secret: 'ilovevdi'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Setup local-strategy
require('./config/passport')(passport);

// Routes
require('./routes/passport_routes')(app, passport);

// uncomment after placing  favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

<<<<<<< HEAD
=======
app.use(cookieParser());
app.use(cors());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
>>>>>>> EL

app.use('/', index);
<<<<<<< HEAD
app.use('/subCategories', require('./routes/categories_routes'))
=======
app.use('/categories', require('./routes/categories_routes'))
<<<<<<< HEAD
>>>>>>> ec649aada2b5352d5802ea3a54e0dd227c2a5004
=======
app.use('/items', require('./routes/item_routes'))
>>>>>>> EL

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
     // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

export default app;
