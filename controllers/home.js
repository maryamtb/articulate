var Articles = require('../model/home');
var data = require('../model/home');
var express = require('express');
var router = express.Router();


//exports.list= function(req, res, next) {
//   Articles.find({}, function(err, data){
    // if (err) return next(err)
    // res.json(users)
    // console.log('articles')
    // res.render('articles', { 'title': 'Express', 'data': Articles })
//   })
// }

module.exports = function(app){
    
    app.in('/insert', function(req, res){
        //get data from mongodb and pass it to view
        Articles.find({}, function(err, data){
            if (err) throw err;
            res.render('form', {links: data});
        });
    })
}


module.exports = router



//exports.insert = function(req, res, next) { 
//  res.render('articles', { title: 'Insert Article' });
//}

    

//exports.get_data = function(req, res, next) { 
//  res.render('articles', { title: 'Load Article' });
//}