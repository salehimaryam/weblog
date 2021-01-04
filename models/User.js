const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:4,
        maxlength:255,
    },
    createAt:{
        type:Date,
        default:now.Date,
    },
});

const User = mongoose.model("User",UserSchema);
module.export = User;