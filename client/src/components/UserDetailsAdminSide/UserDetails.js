import React from 'react'
import './UserDetails.css'
import {useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'

const UserDetails = ({setAdminMode}) => {
    setAdminMode(true)
    const [userData,setUserData]=useState({})
    const location=useLocation()
    const path=location.pathname.split("/")[4]
  useEffect(()=>{
    console.log(path)
    fetchUserDetails()
  },[])
  const fetchUserDetails=async()=>{

const res=await axios.get(`/requests/active/details/${path}`)
console.log(res)
setUserData(res.data)

  }
  const handlePickUp=async(id)=>{
    try{

        const res=await axios.put(`/requests/pick/${id}`)
        res&&window.location.replace("/admin/dashboard")
    }catch(err){
        console.log(err)
    }

}
  return (
    <div className='userdetail-wrapper'>
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
            <button onClick={()=>handlePickUp(userData._id)} className='pick-btn'>{userData.picked?"Picked":"Pick"}</button>
    </div>
  )
}

export default UserDetails