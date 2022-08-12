var express = require('express');
const products = require('../products/product');
var router = express.Router();
const ObjectId = require('mongodb').ObjectID;

/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('admin', { title: 'Ekart', user: false});
});

router.get('/get-products', (req,res,next) => {
    products.getAllProducts().then(data => {
        res.send(data)
    })
})

router.get('/add-product', (req, res, next) => {
    res.render('add-product')
})

router.post('/save-product', (req, res, next) => {
    let image = req.files.image
    products.addPrduct(req.body, (data) => {
        image.mv(`./public/productImages/${data}.jpg`, (err, done) => {
            if (!err) {
                console.log("image successfully saved");
                products.getAllProducts().then(data => {
                    res.render('admin', { title: 'Ekart', user: false, product: data });
                })
            }
        })
    })
})
router.post('/delete-product', (req, res, next) => {
    let response = req.body;
    products.removeProducts({ _id: new ObjectId(`${response._id}`) }).then(data => {
        res.send("Success")
    })
})

module.exports = router;