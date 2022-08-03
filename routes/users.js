var express = require('express');
var router = express.Router();
var express = require('express');
const products = require('../products/product');

/* GET users listing. */
router.get('/', function(req, res, next) {
    let product = ["sdfsd", "sdvsdsdv"]
    products.getAllProducts().then((produ) => {
        console.log(produ)
    })
    res.render('home', { title: 'Ekart', user: true, product: product });
});

module.exports = router;