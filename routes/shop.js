const path = require('path'); // continues the path directly

const express = require('express'); // calling the functions and objects assigned to it

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts); 

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart); 

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/create-order', shopController.postOrder);

router.get('/orders', shopController.getOrders); 

module.exports = router; //this is a variable that represents the current module and exports an object. 