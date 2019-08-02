import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import connectFlash from 'connect-flash';
import bodyParser from 'body-parser';
require('dotenv').config()

import connectDB from './config/connectDB';
import configViewEngine from './config/viewEngine';
import initRoutes from './routes/index';
import configSession from './config/session';

let app = express();

// connect to mongoDB
connectDB();

configSession(app);

configViewEngine(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(connectFlash());

initRoutes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
