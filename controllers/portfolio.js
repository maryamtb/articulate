var portfolio = require('../model/portfolio');

exports.list = function(req, res, next) {
        
portfolio.find({}, function(err, result) {
        if (err) return next(err)
        res.render('portfolio',
             { 'title': 'Express', 'data': result });
       })
}
    



