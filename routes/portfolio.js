var express = require('express');
var router = express.Router();
//var mongo = require('mongodb').MongoClient;
//var objectId = require('mongodb').ObjectID;
//var assert = require('assert');

//var url = 'mongodb://maryamscloud9-thekey-5727196:27017/';

//var controller = require('./controller/portfolio');

//router.get('/', controller.list);


router.get('/', function(req, res, next) {
    res.render('portfolio', { title: 'Express' });
});

module.exports = router;