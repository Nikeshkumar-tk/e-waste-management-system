import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SinglePageDetails.css'
import axios from 'axios'

const SinglePadeDetails = () => {

  const [userData,setUserData]=useState({})
  const location=useLocation()
  const path=location.pathname.split("/")[3]
  
  useEffect(()=>{
    
    fetchUserDetails()
  },[])
  const fetchUserDetails=async()=>{

const res=await axios.get(`/requests/active/details/${path}`)
console.log(res)
setUserData(res.data)

  }

  return (
    
    <div className='page-wrapper'>
       
            <table className='table1'>
              {/* <p>User details</p> */}
              <thead> <tr>
                    <th>Name</th>
                    <td>{userData.username}</td>
                    </tr></thead> 
                  <tbody>  <tr>
                    <th>Address</th>
                    <td>{userData.homeaddress}</td>
                    </tr>
                    <tr>
                    <th>Phoneno</th>
                    <td>{userData.phoneno}</td>
                    </tr>
                    <tr>
                    <th>Landmark</th>
                    <td>{userData.location}</td>
                    </tr>
                    <tr>
                    <th>District</th>
                    <td>{userData.district}</td>
                    </tr>
                    <tr>
                    <th>e-mail</th>
                    <td>{userData.email}</td>
                    </tr>
                    </tbody>
                   
            </table>
          
            <table className='table2'>
         
              <thead>  <tr>
                    <th>weight</th>
                    <td>{userData.weight}</td>
                    </tr></thead>
                 <tbody>   <tr>
                    <th>Amount</th>
                    <td> ₹ {userData.amount}</td>
                    </tr>
                    <tr>
                    <th>Payment method</th>
                    <td>{userData.payment}</td>
                    </tr>
                    <tr>
                    <th>Status</th>
                    <td>{userData.picked?"picked":"not Picked"}</td>
                    </tr>
                    
                    </tbody>
            </table>
            <h3 className='success'> {userData.picked? "Picked succesfully":"Pickup booked successfully"}</h3>
            </div>
  )
}


export default SinglePadeDetails