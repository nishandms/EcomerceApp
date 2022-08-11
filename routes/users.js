var express = require('express');
var router = express.Router();
var express = require('express');
const products = require('../products/product');

/* GET users listing. */
router.get('/', function(req, res, next) {
    let product = []
    products.getAllProducts().then((data) => {
        product = data;
        res.render('home', { title: 'Ekart', user: true, product: product });
    })
});

module.exports = router;