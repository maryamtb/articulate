var express = require('express');
var router = express.Router();
var articles = require('../controllers/home');


router.get('/', function(req, res, next) {
    res.render('home', { title: 'Express' });
});



exports.create_get = function(req, res, next) { 
  res.render('insert', { title: 'Insert Article' });
}

exports.create_post = function(req, res, next) { 
  var Article = new Article(req.body); 
  Article.save(function(err) {
    if (err) {
    return next(err);
    }
    res.render('success', {
      title: 'Success',
      message: 'Added post' });
  });
}

// router.get('/all', function(err, res) {
// 	data.all(function(err, docs) {	
//	collection.find().toArray(function(err, docs) {
//	res.render('articles', {articles: docs})
// 	})
// })



module.exports = router;