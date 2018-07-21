var express = require('express');
var router = express.Router();
var middleware = require('../middleware/reqchecker');
var testcontroller = require('../controller/testcontoller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.status(200).json({"Data":"Hello World"});
});

router.get('/movies:flag',middleware,testcontroller.getallmovies);//
module.exports = router;
