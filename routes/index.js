const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controlers');

console.log('Router loaded');

router.get('/', homeController.home);

module.exports = router;