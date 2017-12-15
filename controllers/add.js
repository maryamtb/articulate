var model = require('../model/add'); 
exports.list= function(req, res, next) { 
    model.find({}, function (err, result) {
if (err) return next(err) 
    res.render('articles',
      { 'title': 'Express', 'data': result })
  })
}
