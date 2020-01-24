const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const discussionSchema = new Schema({
   title: {type: String,required:true},
   username: {type: String,required:true},
   description: {type: String,required:true},
   
});

const Discussion = mongoose.model('Discussion',discussionSchema);

module.exports = Discussion;