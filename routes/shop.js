const path = require('path'); // continues the path directly

const express = require('express'); // calling the functions and objects assigned to it

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router; //this is a variable that represents the current module and exports an object. 