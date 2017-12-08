exports.list= function(req, res, next) {
    About.find({}, function(err, result) {
    if (err) return next(err);
    res.render('about',
        { 'title': 'Express', 'data': result });
    });
};
