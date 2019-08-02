import express from 'express';
import expressEjsEntend from 'express-ejs-extend';

/**
 *  Config view engine for app
 * @param app from exactly express module
 */
let configViewEngine = (app) => {
    app.use(express.static('./public'));
    app.engine('ejs', expressEjsEntend);
    app.set('view engine', 'ejs');
    app.set('views', './views');
};

module.exports = configViewEngine;
