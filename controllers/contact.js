var Articles = require('../model/home');

exports.list= function(req, res, next) {
  Articles.find({}).populate('articles').exec(function (err, result) {
    if (err) return next(err)
    //res.json(articles)
    console.log('articles')
    res.render('articles', { 'title': 'Express', 'data': result })
  })
}