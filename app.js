import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import {
    registerConfigs,
    registerLocal
} from './registers'
import db from './app/lib/database';
import Users from './app/models/users';
import config from './app/config/main';
import registerRoutes from './app/route';
var app = express();

// registerLocal(app, {asd: config});
// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//register the config file into the app.local
registerConfigs(app, config); // Register configs
console.log(app.locals);
registerRoutes(app); // Register routes in application



module.exports = app;