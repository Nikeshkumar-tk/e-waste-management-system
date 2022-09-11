import React, { useContext,useRef } from 'react'
import './Login.css'
import { Context } from '../../context/Context'
import axios from 'axios'

const Login = () => {
  const userRef=useRef()
  const passwordRef=useRef()
  const {user,dispatch,isFetching}=useContext(Context)
  const handleSubmit=async(e)=>{
e.preventDefault()
dispatch({type:"LOGIN_START"})
try{
const res=await axios.post("/auth/login",
{
  username:userRef.current.value,
  password:passwordRef.current.value
})
dispatch({type:"LOGIN_SUCCESS",payload:res.data})
console.log(res.data.username)
// setUser(res.data)
res&&window.location.replace('/')
console.log(user)

}catch(err){
  console.log(err)
  dispatch({type:"LOGIN_FAILURE"})
}
  }
  console.log(isFetching)
  return (
   
    <div className="main">
       <div className='login-form-wrap'>
        <h3>PickUp Login</h3>
        <input type='text' placeholder='Enter your Username' ref={userRef}></input>
        <input type='password' placeholder='Enter your Password' ref={passwordRef}></input>
        <button onClick={handleSubmit}>Login</button>
       <div className='new-account'>
        
        <h5 >Don't have an account?</h5><h5 className='signup-btn' onClick={()=>window.location.replace("/register")}>SignUp</h5>
        </div> 
       </div>
        </div>
        
        


  )
}

export default Login