exports.create_get = function(req, res, next) { 
    res.render('user_form', { title: 'Create User' });
}