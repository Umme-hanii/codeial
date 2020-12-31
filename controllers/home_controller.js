const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.home = function(req, res) {
   // console.log(req.cookies);
   // res.cookie('user_id', 789);
   // Post.find({}, function(err, posts) {
   //    return res.render('home', {
   //       title: 'Codeial | Home',
   //       posts: posts
   //    });
   // });

   // Populate the user of each post
   Post.find({})
   .populate('user')
   .populate({
      path: 'comments',
      populate: {
         path: 'user'
      }
   })
   .exec(function(err, posts) {
      return res.render('home', {
           title: 'Codeial | Home',
           posts: posts
      });
   });
   
   // Populate the comment of each post
   // Comment.find({}).populate('user').populate('post').exec(function(err, comments) {
   //    return res.render('home', {
   //       title: 'Codeial | Home',
   //       comments: comments
   //    });
   // });
   
}