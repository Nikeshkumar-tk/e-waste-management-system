import React, { useContext, useState } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../context/Context'

const Home = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [login,setLogin]=useState(false)
    const {user}=useContext(Context)
    const handleSubmit=async(e)=>{
e.preventDefault()
try{

    const res=await axios.post('/auth/login',{
        username:username,
        password:password
    })
    console.log(res)
    res&&setLogin(true)
}catch(err){
    console.log(err)
}

    }
  return (
    <div className='homeMain'>
       <section className='section-1'>
       <img src='https://5.imimg.com/data5/UP/DP/TC/SELLER-63170916/e-waste-management-service-500x500.png' className='sec-1-img'></img>
     <div className='sec-1-right'>
         <h2 className='sec-1-h2'>PickUp</h2>
         <h4>Say 'NO' to Electronic Waste!</h4>
         <h3 onClick={() =>{user?window.location.replace("/dashboard"):window.location.replace("/login")}}>Join Us Today</h3>
        
        </div>
       </section>
                
                </div>
               
        
    
  )
}

export default Home