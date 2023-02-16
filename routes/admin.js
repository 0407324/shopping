const path = require('path'); // continues the directy path in the program

const express = require('express'); //define routing for the express object

const productsController = require('../controllers/products');

const router = express.Router(); // applications end points 

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct); 

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router; 
