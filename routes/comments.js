const express = require('express');
const passport = require('passport');
const router = express.Router();
const commentsController = require('../controllers/comments_controller');

// router.get('/post', postsController.post);

router.post('/create', passport.checkAuthentication, commentsController.create);

module.exports = router;