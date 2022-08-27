import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'

const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phoneno,setPhoneno]=useState('')
    const [homeaddress,setHomeaddress]=useState('')
    const [landmark,setLanmark]=useState('')
    const [district,setDistrict]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=async(e)=>{
e.preventDefault()
try{

    const res=await axios.post('/auth/register',{
        username:name,
        email:email,
        phoneno:phoneno,
        homeaddress:homeaddress,
        landmark:landmark,
        district:district,
        password:password
    })
    console.log(res)
    res&&window.location.replace('/login')
}catch(err){
    console.log(err)
}
    }
  return (
    <div className='register'>
        <div className='register-inner'>
            <form onSubmit={handleSubmit}>


            <input type='text' className='input-text' placeholder='username' onChange={(e)=>setName(e.target.value)}/>
            <input type='text' className='input-text' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type='text' className='input-text' placeholder='phone number' onChange={(e)=>setPhoneno(e.target.value)}/>
            <input type='text' className='input-text' placeholder='homeaddress' onChange={(e)=>setHomeaddress(e.target.value)}/>
            <input type='text' className='input-text' placeholder='landmark' onChange={(e)=>setLanmark(e.target.value)}/>
            <input type='text' className='input-text' placeholder='District' onChange={(e)=>setDistrict(e.target.value)}/>
            <input type='text' className='input-text' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            <button className='register-btn' type='submit'>Register</button>
            </form>

        </div>
    </div>
  )
}

export default Register