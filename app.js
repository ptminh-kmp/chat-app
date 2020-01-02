import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import connectFlash from 'connect-flash';
import passport from 'passport';
import http from 'http';
import socketio from 'socket.io';
import initSockets from './sockets/index';

import connectDB from './config/connectDB';
import configViewEngine from './config/viewEngine';
import initRoutes from './routes/index';
import session from './config/session';
import configSocketIo from './config/socketio';

let app = express();

// Init server with socket.io and express
let server = http.createServer(app);
let io = socketio(server);

// connect to mongoDB
connectDB();

session.config(app);

configViewEngine(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(connectFlash());

app.use(passport.initialize());
app.use(passport.session());

initRoutes(app);

configSocketIo(io, cookieParser, session.sessionStore);

initSockets(io);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

server.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(`Running at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
})
