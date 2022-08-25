const router=require("express").Router();
const request=require("../models/request")
const bcrypt=require("bcrypt")

router.post("/",async(req,res)=>{
try{
   
    const newRequest=new request({
        username:req.body.username,
       
       
       homeaddress:req.body.homeaddress,
        phoneno:req.body.phoneno,
        location:req.body.location,
        weight:req.body.weight,
        payment:req.body.payment,
        picked:req.body.picked
        
    })
    const Request=await newRequest.save()
    res.status(200).json(Request)
    
}catch(err){

    console.log(err)
    res.status(404).json(err)

}
})
router.post("/login",async(req,res)=>{
    try{
        const User=await user.findOne({username:req.body.username})
        !User&&res.status(400).json("Wrong")
        const validate=await bcrypt.compare(req.body.password,User.password)
        !validate&&res.status(400).json("Wrong")
        res.status(200).json(User)

    }catch{

    }
})
module.exports=router