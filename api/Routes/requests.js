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
        picked:req.body.picked,
        userid:req.body.userid,
        amount:req.body.amount,
        email:req.body.email,
        district:req.body.district
        
    })
    const Request=await newRequest.save()
    res.status(200).json(Request)
    
}catch(err){

    console.log(err)
    res.status(404).json(err)

}
})
// router.post("/login",async(req,res)=>{
//     try{
//         const User=await user.findOne({username:req.body.username})
//         !User&&res.status(400).json("Wrong")
//         const validate=await bcrypt.compare(req.body.password,User.password)
//         !validate&&res.status(400).json("Wrong")
//         res.status(200).json(User)

//     }catch{

//     }
// })
router.put("/pick/:id",async(req,res)=>{
    try{

        let updatedRequest=await request.findByIdAndUpdate(req.params.id,{
            "$set":{"picked":"true"}
        })
        res.status(200).json(updatedRequest)
    }catch(err){
        console.log(err)
    }

}
)
router.get("/:userid",async(req,res)=>{
try{
let result=await request.find({"userid":req.params.userid,"picked":true})
res.status(200).json(result)
}catch(err){
console.log(err)
}

})
router.get("/active/:userid",async(req,res)=>{
    try{
    let result=await request.find({"userid":req.params.userid,"picked":false})
    res.status(200).json(result)
    }catch(err){
    console.log(err)
    }
    
    })
    router.get("/active/details/:id",async(req,res)=>{
        try{
        let result=await request.findById(req.params.id)
        res.status(200).json(result)
        }catch(err){
        console.log(err)
        }
        
        })
module.exports=router