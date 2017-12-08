var model = require('../model/portfolio');

exports.list = function(req, res, next) {
// ^call controller function for portfolio

model.find({}, function(err, result) {
        if (err) return next(err)
        res.render('articles',
             { 'title': 'Express', 'data': result });
       })
    }
