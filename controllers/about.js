var model = require('../model/about');

exports.list= function(req, res, next) {
    model.find({}, function(err, result) {
    if (err) return next(err);
    res.render('about',
        { 'title': 'Express', 'data': result });
    });
};
