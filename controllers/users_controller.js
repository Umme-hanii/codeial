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
    //TO DO later
}

//sign in and create a session for the user
module.exports.createSession = function(req, res) {
    //TO DO later
}