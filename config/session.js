import session from 'express-session';
import connectMongo from 'connect-mongo';

let MongoStore = connectMongo(session);
let mongoURL = `${process.env.DB_URI}`;
// let mongoURL = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
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
let config = (app) => {
    app.use(session({
        key: process.env.SESSION_KEY,
        secret: process.env.SESSION_SECRET,
        store: sessionStore,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        }
    }));
};

module.exports = {
    config: config,
    sessionStore: sessionStore
}
