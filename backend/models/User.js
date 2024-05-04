const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    fullName : {
        type : String,
        required : true
    },

    email : {
        type : String,
        unique : true,
        required : true
    },

    userName : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    }
 
 })
 
 const User = mongoose.model("User", userSchema);

 module.exports = User;