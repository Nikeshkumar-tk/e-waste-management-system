import React, { useEffect, useState } from 'react'
import './Admin.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Admin = ({setAdminMode}) => {
    const [data,setData]=useState([])
    const [adminUser,setAdminUser]=useState('')
   
    setAdminMode(true)
    // setAdminUser(JSON.parse(localStorage.getItem("admiuser")))

    useEffect(()=>{
       
        fetchData()
        console.log(data)

    },[])
    const fetchData =async()=>{
        try{

            const res=await axios.get("/admin/requests")
           
                
                 setData(res.data)
                 setAdminUser(JSON.parse(localStorage.getItem("admiuser")))//fetching admin details from local storage

           
            
        }catch(err){
            console.log(err)
        }

    }
const handlePickUp=async(id)=>{
    try{

        const res=await axios.put(`/requests/pick/${id}`)
    }catch(err){
        console.log(err)
    }

}   
const pickedDetails=async()=>{

const res=await axios.get("/admin/requests/completed")
setData(null)
setData(res.data)
console.log(res.data)

} 
  return (
    <div className='admin-main'>
        <div className='admin-nav'>
            <h4>PickUp</h4>
            <ul>
                
                <li className='li-2' onClick={fetchData}>Requests</li>
                <li className='li-3' onClick={pickedDetails}>Completed Requests</li>
                <li className='li-1'><Link to='/admin/dashboard/feedback' className='link'>feedbacks</Link></li>

            </ul>
            <h5>Admin : {adminUser.username}</h5>
        </div><hr></hr>
        <section className='detail-section'>
            {
                data.map((res)=>{
            const {username,weight,payment,userid,_id,picked}=res

return(


<Link to={`/admin/dashboard/userdetails/${_id}`} className='link'>


<div className='detail-card'>
    <div className='uwp-details'>

    <h4>Username:{username}</h4>
    <h4>Weight: {weight} kg</h4>
    <h4>Payment method : {payment}</h4>
    </div>
    <div className='status-wrap'>

    <h4 className='status'>status : {picked?"Picked":"Not Picked"}</h4>{!picked?
    <button className='pick' onClick={()=>handlePickUp(_id)}>{picked?"Picked":"Pick"}</button>:<h4>Picked</h4>}
    </div>


</div><hr className='detail-hr'/>
</Link>
                )})
            }
        </section>
    </div>
  )
}

export default Admin