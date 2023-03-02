const path = require('path'); // continues the directy path in the program

const express = require('express'); //define routing for the express object

const rootDir = require('../util/path');

const router = express.Router(); // applications end points 

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;