var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');



var articleSchema = new mongoose.Schema({
 name: String,
 author: String,
 url: String,
});


router.post('/article/add', (req, res, next) => {
  articleSchema.create(req.body, (err, article) => {
    if (err) {
      var err = new Error("Error:" + err);
      err.status = 404;
      next(err);
    } else {
      return res.redirect('/home');
    }
  })

router.post('/article/add', (req, res, next) => {
  var data = {
    name: req.body.name,
    author: req.body.author,
    url: req.body.url,
  };
  articleSchema.create(data, (err, user) => {
    if (err) {
      throw err;
    }
    var article = {
      title: "Your article has been added!"
    }
    articleSchema.create(article, (err, article) => {
      if (err) throw err;
      return res.redirect('./portfolio');
    });
  });
});
});

var art = mongoose.model("art", articleSchema);
module.exports = art;

