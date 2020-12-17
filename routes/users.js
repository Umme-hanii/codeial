const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);

//create a new user
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

router.post('/create', usersController.create);

router.post('/create-session', usersController.createSession);

router.get('/end-session', usersController.endSession);
//if user is not new
// router.get('/sign-in-user', usersController.existing);
//login
// router.

module.exports = router;