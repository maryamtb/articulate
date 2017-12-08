//var express = require('express');
//var router = express.Router();

//var controller = require('../controllers/portfolio');

//router.get('/', controller.list);

//module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('portfolio', { title: 'Express' });
});

module.exports = router;