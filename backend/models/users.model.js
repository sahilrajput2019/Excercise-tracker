
// Requiring Package
const mongoose = require('mongoose');

//Defining a UserSchema 
var userSchema = new mongoose.Schema({
    
   username : {
       type : String,
       required : true,
       unique : true,
       trim : true
   }
},
   {
       timestamps : true
});

//User Model or Collection
const User = mongoose.model("User", userSchema);

module.exports = User;
