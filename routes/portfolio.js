var express = require('express');
var router = express.Router();

var controller = require('../controllers/portfolio')

router.get('/', controller.list)

module.exports = router;