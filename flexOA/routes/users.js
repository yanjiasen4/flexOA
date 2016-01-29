var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao') // userDao对象

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('users');
});

/*
  注册，调用userDao的相应函数
 */
router.post('/register', function(req, res, next) {
    // [TODO]
});

/*
  登陆，调用userDao的查询函数并验证登陆
 */
router.post('/login', function(req, res, next) {
    // [TODO]    
});

module.exports = router;
