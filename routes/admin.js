var express = require('express');
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
        // res.render('add-product')
})

module.exports = router;