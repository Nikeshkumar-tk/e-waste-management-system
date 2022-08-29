import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SinglePageDetails.css'
import axios from 'axios'

const SinglePadeDetails = () => {
  const [userData,setUserData]=useState({})
  const location=useLocation()
  const path=location.pathname.split("/")[3]
  useEffect(()=>{
    // console.log(path)
    fetchUserDetails()
  },[])
  const fetchUserDetails=async()=>{

const res=await axios.get(`/requests/active/details/${path}`)
console.log(res)
setUserData(res.data)

  }

  return (
    
    <div className='page-wrapper'>
        {/* <div className='detail-wrapper'>
            <div className='detail-inner'>


            <h4>Username</h4>
            <h4>Address</h4>
            <h4>Phoneno</h4>
            <h4>Location</h4>
            <h4>Weight of waste</h4>
            <h4>Amount</h4>
            <h4>Payment method</h4>
            </div>
            <button>Close</button>

            </div> */}
            <table className='table1' border='2px'>
                <tr>
                    <th>Name</th>
                    <td>{userData.username}</td>
                    </tr>
                    <tr>
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
                   <caption>User Details</caption>
            </table>
            <h4></h4>
            <table className='table2' border='2px'>
                <tr>
                    <th>weight</th>
                    <td>{userData.weight}</td>
                    </tr>
                    <tr>
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
                    <caption>Pickup Details</caption>
                   
            </table>
            </div>
  )
}

export default SinglePadeDetails