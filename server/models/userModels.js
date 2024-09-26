const mongoose = require('mongoose') 

const userSchema =new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    country:{
        type:String,
        enum:['USA','CANDA','INDIA','AUSTRALIA','UK'],
        required:true
    }
 
})

const User = mongoose.model('User',userSchema);
module.exports = User;