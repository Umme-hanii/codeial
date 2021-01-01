const express = require('express');
const passport = require('passport');
const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/profile/:id', passport.checkAuthentication,usersController.profile);

//create a new user
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

router.post('/create', usersController.create);
//if user is not new
// router.get('/sign-in-user', usersController.existing);
//login
// router.

//use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
),usersController.createSession);

router.get('/sign-out', usersController.destroySession)

module.exports = router;