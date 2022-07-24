var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products = ["sdfsd","sdvsdsdv"]
  res.render('home', { title: 'Ekart', user: true, product: products });
});

module.exports = router;
