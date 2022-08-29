const mongoose=require("mongoose")
const requestSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:false
       
    },
    weight:{
        type:Number,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    payment:{
        type:String,
        required:true
    },
    homeaddress:{
        type:String,
        required:true
    },
    picked:{
        type:Boolean,
        required:true
    },
    userid:{
        type:String,
        
    },
    amount:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    district:{
        type:String
    }
    
   
    
    
},
{timestamps:true}
);
module.exports=mongoose.model("request",requestSchema);