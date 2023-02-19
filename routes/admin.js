const path = require('path'); // continues the directy path in the program

const express = require('express'); //define routing for the express object

const adminController = require('../controllers/admin');

const router = express.Router(); // applications end points 

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct); 

// /admin/products => GET
router.get('/products', adminController.getProducts); 

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router; 
