const router=require("express").Router();
const admin=require("../models/admin")
const bcrypt=require("bcrypt")
const users=require('../models/user');
const user = require("../models/user");
const requests=require('../models/request')

router.post("/register",async(req,res)=>{
try{
    const salt=await bcrypt.genSalt(10)
    const hashPass=await bcrypt.hash(req.body.password,salt)

    const newAdmin=new admin({
        username:req.body.username,
        
        password:hashPass,
       
    })
    const Admin=await newAdmin.save()
    res.status(200).json(Admin)
    
}catch(err){

    console.log(err)
    res.status(404).json(err)

}
})
router.post("/login",async(req,res)=>{
    try{
        const Admin=await admin.findOne({username:req.body.username})
        !Admin&&res.status(400).json("Wrong")
        const validate=await bcrypt.compare(req.body.password,Admin.password)
        !validate&&res.status(400).json("Wrong")
        res.status(200).json(Admin)

    }catch{

    }
})
router.get('/users',async(req,res)=>{
    try{

        const Users=await user.find()
        res.status(200).json(Users)
    }
    catch(err){
res.status(500).json(err)
    }
})
router.get('/requests',async(req,res)=>{
const Requests=await requests.find({"picked":false})
res.status(200).json(Requests)
})
router.get('/requests/completed',async(req,res)=>{
    const Requests=await requests.find({"picked":true})
    res.status(200).json(Requests)
    })
module.exports=router