var express = require('express');
var router = express.Router();

router.get('/portfolio', function(req, res, next) {
var MongoClient = require('mongodb').MongoClient 
MongoClient.connect('mongodb://maryamscloud9-thekey-5727196:27017/articles', function (err, db) { 
if (err) throw err 
db.collection('articles').find().
    toArray(function (err, result) { 
        if (err) throw err 
        res.render('articles',
             { 'title': 'Express', 'data': result });
       })
    }) 
});

module.exports = router;