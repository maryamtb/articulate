var Classes = require('../model/classes')
exports.list= function(req, res, next) {
    Classes.find({}, function(err, result) {
    if (err) return next(err)
    res.render('about',
        { 'title': 'Express', 'data': result });

    })}