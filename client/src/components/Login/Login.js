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
dispatch({type:"LOGIN_SUCESS",payload:res.data})
console.log(res.data)
}catch(err){
  console.log(err)
  dispatch({type:"LOGIN_FAILURE"})
}
  }
  return (
   
    <div className="main">
        <div className="navbar">
            <div className="icon">
                <h2 className="logo">𝙿𝚒𝚌𝚔𝚄𝚙!
                </h2>
            </div>

           
           
        
        

             

                <div className="form">
                
                    <i className="fa-solid fa-users"></i>
                
                <form onSubmit={handleSubmit}>

                    <input type="text" name="text" placeholder="Username" ref={userRef}/>
                    <input type="password" name="password" placeholder=" 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 " ref={passwordRef}/>
                    <button className="btnn" type='submit'>𝗟𝗼𝗴 𝗜𝗻</button>
                </form>

                    <p className="link">𝗗𝗼𝗻'𝘁 𝗵𝗮𝘃𝗲 𝗮𝗻 𝗮𝗰𝗰𝗼𝘂𝗻𝘁 </p>
                        <div className="sign">𝗦𝗶𝗴𝗻 𝘂𝗽</div>

                    

                </div>
            </div>
        </div>
        
        


  )
}

export default Login