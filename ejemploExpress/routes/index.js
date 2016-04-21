var express = require('express');
var router = express.Router();
var sumando = require('../lib/suma');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
    suma: sumando.suma(3,4),
    segundo: new Date().getSeconds(),
    users: ['Smith', 'John']});
});

module.exports = router;
