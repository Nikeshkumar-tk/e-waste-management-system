import React, { useRef } from 'react'
import './Adminlogin.css'
import axios from 'axios'

const Adminlogin = ({setAdminMode,setAdminUser}) => {
    setAdminMode(true)
    const usernameRef=useRef()
    const passwordRef=useRef()
    const handleAdminLogin=async()=>{
        try{

            const res=await axios.post("/admin/login",{
                username:usernameRef.current.value,
                password:passwordRef.current.value
            })
            console.log(res.data)
            // setAdminName(res.data.username)
            localStorage.setItem("admiuser",JSON.stringify(res.data))
            res&&window.location.replace("/admin/dashboard")
        }catch(err){
        console.log(err)
        }
    }
  return (
    <div className='admin-login-wrap'>
        <div className='form-wrap-inner'>
            <h2>PickUp Admin Login</h2>
            <input type='text' ref={usernameRef} placeholder="Username" onChange={(e)=>setAdminUser(e.target.value)}/>
            <input type='password' ref={passwordRef} placeholder="Password"/>
            <button onClick={handleAdminLogin} className='admin-login-btn'>Login</button>
        </div></div>
  )
}

export default Adminlogin