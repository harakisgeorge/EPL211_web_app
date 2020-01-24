const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
   discussion_title:{type:String,required:true},
   username: {type: String,required:true},
   content: {type: String,required:true},
   
});

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;