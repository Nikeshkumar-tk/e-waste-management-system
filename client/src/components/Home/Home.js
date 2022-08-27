import React, { useState } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [login,setLogin]=useState(false)
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
    <div className="main">
       
                
                </div>
               
        
    
  )
}

export default Home