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
        req.flash('success', 'Posted Successfully');
        return res.redirect('back');
    } catch (error) {
        req.flash('error', 'err');
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
            
            req.flash('success', 'Post and associated comments deleted..');
            return res.redirect('back');
        } else {
            req.flash('error', 'You cannot delete this post');
            return res.redirect('back');
        }
    } catch (error) {
        req.flash('error', err);
        return res.redirect('back');
    }
    
}