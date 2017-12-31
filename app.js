process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
//var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//var mongoose = require('./config/mongoose');
var app = express();
//require('./config/mongoose')


//var path = require('path');
//app.set('./views', path.join(__dirname, './views'));
//app.set('view engine', 'ejs');

// view engine setup
//app.set('./views', path.join(__dirname, './views'));
//app.set('view engine', 'ejs');
//app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public'))); 
//app.use(bodyParser.json());

//var routes = require('./routes');

var home = require('./routes/home');
app.use('/', home);
var portfolio = require('./routes/portfolio');
app.use('/portfolio', portfolio);
var about = require('./routes/about');
app.use('/about', about);
var contact = require('./routes/contact');
app.use('/contact', contact);
var error = require('./config/error_handler'); 
error(app);

module.exports = app;
