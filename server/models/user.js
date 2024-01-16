const mongoose = require('mongoose')
const  {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/ayu-sh/image/upload/v1690405896/default-avatar-photo-placeholder-profile-picture-vector-21806614_jb92fy.jpg"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]

})

mongoose.model("User", userSchema)