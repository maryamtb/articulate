var express = require('express');
var morgan = require('morgan');
var path = require('path');
//var session = require('express-session');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var expressValidator = require('express-validator');
//var passport = require('passport');

module.exports = function() {
var app = express();

// view engine setup
app.set('./views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//app.use(passport.initialize());
//app.use(passport.session());

if (process.env.NODE_ENV === 'development') {
app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(expressValidator())
app.use(cookieParser());
//app.use(session({
//    secret: 'something',
//    resave: true,
//    saveUninitialized: true
//}));
app.use(express.static('public'));

return app;
};