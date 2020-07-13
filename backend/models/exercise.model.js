
// Requiring Package
const mongoose = require('mongoose');

//Defining a ExerciseSchema 
var exerciseSchema = new mongoose.Schema({
    
   username : {
       type : String,
       required : true
   },
   description :{
        type : String,
        required : true
   },
   duration : {
       type : Number,
       required : true
   },
   date : {
        type : Date,
        required : true
   }
},
   {
       timestamps : true
});

//Exercise Model or Collection
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
