const path = require('path'); // continues the path directly

const express = require('express'); // calling the functions and objects assigned to it

const rootDir = require('../util/path'); 

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router; //this is a variable that represents the current module and exports an object. 