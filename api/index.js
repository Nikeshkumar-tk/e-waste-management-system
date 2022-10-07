const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const authRoute=require("./Routes/auth")
const requestRoute=require('./Routes/requests')
const adminAuth=require('./Routes/admins')
const feedbackRoute = require('./Routes/feedbacks')
dotenv.config()
app.use(express.json())
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
       }).then(console.log("DATABASE CONECTED")).catch((err)=>console.log(err))

app.use('/auth',authRoute)
app.use('/requests',requestRoute)
app.use('/admin',adminAuth)
app.use('/feedback',feedbackRoute)

app.listen(5000,()=>console.log('server started'))