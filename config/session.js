import session from 'express-session';
import connectMongo from 'connect-mongo';
import dotenv from 'dotenv';

dotenv.config();

let MongoStore = connectMongo(session);
let mongoURL = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
/**
 * This variable is where save session, in this case is MongoDb
 */
let sessionStore = new MongoStore({
    url: mongoURL,
    autoReconnect: true
});

/**
 *  Config session for app
 * @param app from exactly express module
 */
let configSesson = (app) => {
    app.use(session({
        key: 'express.sid',
        secret: 'mySecret',
        store: sessionStore,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        }
    }));
};

module.exports = configSesson;
