const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');

module.exports.home = async function(req, res) {
   try{
      // Populate the user of each post
      let posts = await Post.find({})
      .populate('user')
      .populate({
         path: 'comments',
         populate: {
            path: 'user'
         }
      });

      let users = await User.find({});
      
      return res.render('home', {
         title: 'Codeial | Home',
         posts: posts,
         all_users: users
      });
   }catch(err) {
      console.log('Error', err);
      return;
   }
   
   
   
   // Populate the comment of each post
   // Comment.find({}).populate('user').populate('post').exec(function(err, comments) {
   //    return res.render('home', {
   //       title: 'Codeial | Home',
   //       comments: comments
   //    });
   // });
   
}