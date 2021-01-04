const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');

module.exports.home = function(req, res) {

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

      User.find({}, function(err, users) {
         return res.render('home', {
            title: 'Codeial | Home',
            posts: posts,
            all_users: users
       });
      })
      
   });
   
   // Populate the comment of each post
   // Comment.find({}).populate('user').populate('post').exec(function(err, comments) {
   //    return res.render('home', {
   //       title: 'Codeial | Home',
   //       comments: comments
   //    });
   // });
   
}