import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import Debug from 'debug'
import express from 'express'
import logger from 'morgan'
var cors = require('cors')
// import favicon from 'serve-favicon';
import path from 'path'
import lessMiddleware from 'less-middleware'
import index from './routes/index'
import passport from 'passport'
import flash from 'connect-flash'
import session from 'express-session'
import mongoose from 'mongoose'
const app = express()
const debug = Debug('jsbakers-arcadier:app')
const Swagger = require('swagger-client')

// Connect with Mongo DB
mongoose.connect(process.env.MONGODB_URI)

// Init middel-ware
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(lessMiddleware(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Setup sessions
app.use(session({ secret: 'ilovevdi'}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// Setup local-strategy
require('./config/passport')(passport)

// Routes
require('./routes/passport_routes')(app, passport)

// uncomment after placing  favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(cookieParser())
app.use(cors())
app.use(lessMiddleware(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/subCategories', require('./routes/categories_routes'))
app.use('/items', require('./routes/item_routes'))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err)
  process.exit(1)
})

export default app
