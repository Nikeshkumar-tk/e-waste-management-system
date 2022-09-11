import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.css'
import axios from 'axios'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const {user}=useContext(Context)
  const [userData,setUserData]=useState([])
  const [cpickUp,setCpickUp]=useState(true)
  useEffect(()=>{
fetchCompletedRequest()
console.log(user.userid)
console.log(userData)

  },[])
  const fetchCompletedRequest=async()=>{
    try{

      const res=await axios.get(`/requests/${user.userid}`)
      // console.log(res.data)
      setUserData(res.data)
      console.log(userData)
    }catch(err){
      console.log(err)
    }
  }
  const fetchActiveRequests=async()=>{
    try{

      const res=await axios.get(`/requests/active/${user.userid}`)
      setUserData(res.data)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='dashboard-wrap'>
        <div className='headings'>
            <h4 className={`c-requests`} onClick={fetchCompletedRequest}>Completed pickups</h4>
            {/* <span className='completedpickup-u-span'></span> */}
            <h4 className='a-requests' onClick={fetchActiveRequests}>Active requests</h4>
        </div>
        <section className='details'>
          {
            userData.map((user)=>{
           const {username,weight,payment,homeaddress,picked,_id,amount}=user
           return(


<Link to={`/dashboard/requestdetails/${_id}`} className='link'>


<div className='detail-list'>
  <div className='wap-wrap'>

    <h5 className='weight'>weight : {weight} kg</h5>
    <h5 className='address'>Address : {homeaddress}</h5>
   

    <h5 className='payment'>Payment method : {payment}</h5>
  </div>
  <h4>Amount : ₹ {amount}</h4>
<h4 className='pick-status'>Status : {picked?"Picked":"Not Picked"}</h4>
</div>
</Link>

           )
            })

          }
        <Link to='/request'>

        <button className='request-btn'>Book PickUp</button>
        </Link>
        </section>
        </div>
  )
}

export default Dashboard