var data = require('../model/home');

exports.list= function(req, res, next) {

data.find({}, function(err, result) {
    if (err) return next(err);
    res.render('home',
        { 'title': 'Express', 'data': result });
    });
};

