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
        <div className="navbar">
            <div className="icon">
                <h2 className="logo">𝙿𝚒𝚌𝚔𝚄𝚙!
                </h2>
            </div>

            <div className="menu">
                <ul>
                    <li><a href="front.html">HOME</a></li>
                    <li><a href="ABOUT.html">ABOUT</a></li>
                    <li><a href="ADMINLOGIN.html">ADMIN</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>

           
        </div> 
        <div className="content">
            
            <h1> 𝐄 𝐖𝐚𝐬𝐭𝐞 <span>𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 </span> </h1>
            <p className="par" >
                <font size="5">
                WHEN YOU
                REFUSE TO REUSE
                IT'S THE EARTH
                YOU ABUSE
                </font>
            </p>

                <button className="cn">BOOK YOUR 𝙿𝚒𝚌𝚔𝚄𝚙!</button>

            {  !login ?<div className="form">
                    <h2>𝙻𝚘𝚐𝚒𝚗 𝙷𝚎𝚛𝚎
                    </h2>
                    <form onSubmit={handleSubmit}>

                    <input type="text" placeholder=" Username " onChange={(e)=>setUsername(e.target.value)}/>
                    <input type="password" name="password" placeholder=" Password " onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="btnn" type='submit'>𝐋𝐨𝐠𝐢𝐧 𝐇𝐞𝐫𝐞</button>
                    </form>

                    <p className="link">𝗗𝗼𝗻'𝘁 𝗵𝗮𝘃𝗲 𝗮𝗻 𝗮𝗰𝗰𝗼𝘂𝗻𝘁
                    <Link to="/register">𝗦𝗶𝗴𝗻 𝘂𝗽</Link></p>

                    
                </div>:"𝙿𝚒𝚌𝚔𝚄𝚙"}
                    </div>
                
                </div>
               
        
    
  )
}

export default Home