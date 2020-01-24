const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
   description:{type:String,required:true},
   choice_a:{type:String},
   choice_b:{type:String},
   choice_c:{type:String},
   choice_d:{type:String},
   type:{type: Number, required:true},
   tags:[],
   correctChoice:{type:Number, required:true},
   numberOfCorrect:Number,
   numberOfWrong:Number

});

const Exercise = mongoose.model('Exercise',exerciseSchema);

module.exports = Exercise;