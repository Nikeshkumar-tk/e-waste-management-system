const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    profilePic:{
        type:String,
        required:false
        
        

    },
    district:{
        type:String,
        required:true
    },
    landmark:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    homeaddress:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        unique:true
    }
    
},
{timestamps:true}
);
module.exports=mongoose.model("user",userSchema);