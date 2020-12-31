const Post = require("../models/post");
const Comment = require("../models/comment");

module.exports.post = function(req, res) {
    return res.render("post", {
        title: "Post"
    });
}

module.exports.create = function(req, res) {    
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function(err, post) {
        if(err){console.log("Error in creating the post"); return;}
        return res.redirect('back');
    });
}

module.exports.comment = function(req, res) {
    Comment.create({
         content: req.body.content,
         user: req.user._id,
         post: req.post._id
    }, function(err, comment) {
        if(err){console.log("Error in creating a comment");}
        return res.redirect('back');
    });
}