// calling in express //
const express = require('express');

// user authorization //
const authController = require('../controllers/auth');

const router = express.Router();

// login page //
router.get('/login', authController.getLogin);

// account page once logged in //
router.post('/login', authController.postLogin);

// page showing the user had logged out successfully //
router.post('/logout', authController.postLogout);

module.exports = router;