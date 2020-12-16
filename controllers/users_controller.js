const User = require("../models/user");
const { use } = require("../routes/users");

module.exports.profile = function(req, res) {
    return res.render('user_profile', {
        title: "user"
    });
}

//when user clicks on 'sign-up' button on home page, render the signup page
module.exports.signUp = function(req, res) {
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    });
}

// when user clicks on 'sign-in' button on home page, render the signin page
module.exports.signIn = function(req, res) {
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    });
}

//get the sign-up data
module.exports.create = function(req, res) {
    if(req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user) {
        if(err){console.log('error in finding user in signing up'); return;}

        if(!user) {
            User.create(req.body, function(err, user) {
                if(err){console.log('error in creating user in signing up'); return;}

                return res.redirect('/users/sign-in');
            });
        }else {
            return res.redirect('back');
        }
    });
}

//sign in and create a session for the user
module.exports.createSession = function(req, res) {
    //find the user
    User.findOne({email: req.body.email}, function(err, user) {
        if(err){console.log('error in finding user in signing in'); return;}
        // handle user found
        if(user) {
            // handle password which doesn't match
            if(req.body.password != user.password) {
                return res.redirect('back');
            }

            // handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');

        }else {
            // handle user not found
            return res.redirect('back');
        }
    });
}