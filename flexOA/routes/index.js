var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FlexOA', date: '当前日期', titleIntro: '详细' });
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

module.exports = router;
