var express = require('express');
const products = require('../products/product');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin', { title: 'Ekart', user: false });
});
router.get('/add-product', (req, res, next) => {
    res.render('add-product')
})
router.post('/save-product', (req, res, next) => {
    console.log("callsed")
    console.log(req.body)
    console.log(req.files.image)
    products.addPrduct(req.body, (data) => {
        console.log(data)
    })
})

module.exports = router;