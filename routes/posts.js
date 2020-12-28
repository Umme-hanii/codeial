const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts_controller');

// router.get('/post', postsController.post);

router.post('/create', postsController.create);

module.exports = router;