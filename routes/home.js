var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

    


var controller = require('../controllers/portfolio')

router.get('/', controller.list)

module.exports = router;