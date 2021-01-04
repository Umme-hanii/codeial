const Post = require("../models/post");
const Comment = require('../models/comment');

module.exports.post = function(req, res) {
    return res.render("post", {
        title: "Post"
    });
}

module.exports.create = async function(req, res) {
    try { 
        let post = await Post.create({
            content: req.body.content,
            user: req.user._id
        });
        return res.redirect('back');
    } catch (error) {
        console.log("Error in creating the post");
        return;
    }
}


module.exports.destroy = async function(req, res) {
    try {
        let post = await Post.findById(req.params.id);
        //  .id means converting the objectId to string
        if(post.user == req.user.id) {
            post.remove();
            
            await Comment.deleteMany({post: req.params.id});
            return res.redirect('back');
        } else {
            return res.redirect('back');
        }
    } catch (error) {
        console.log("Error in deleting the post");
        return;
    }
    
}