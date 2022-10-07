import React, { useState,useContext} from 'react'
import './Request.css'
import axios from 'axios'
import { Context } from '../../context/Context'
// import { userContext } from '../../App'

const Request = () => {
  const {user,dispatch,isFetching}=useContext(Context)
 const [payment,setPayment]=useState('')
 const [weight,setWeight]=useState()
 const [amount,setAmount]=useState()
 const [paymentmode,setPaymentMode]=useState(false)
 
 const findAmount=(e)=>{
  e.preventDefault()
  let am=weight*50
  setAmount(am)
  console.log(user)
  setPaymentMode(true)
 }
 const handleSubmit=async(e)=>{
  e.preventDefault()
  console.log(user)
  try{

    const res=await axios.post("/requests",{
      username:user.username,
      homeaddress:user.homeaddress,
      phoneno:user.phoneno,
      weight:weight,
      payment:payment,
      picked:false,
      location:user.landmark,
      userid:user.userid,
      amount:amount,
      email:user.email,
      district:user.district
    })
    console.log(res)
    res&&(payment == "online payment"?window.location.replace("/payment"):window.location.replace(`/dashboard/requestdetails/${res.data._id}`))
  }catch(err){
    console.log(err)
  }
  
 }
    
  return (
    <div className='request-main'>
      <marquee>Make your new request for pick up.Minimum weight of 1kg is required to book your PickUp</marquee>
       <div className='request-inner'>
        <form className='request-frm'>
          <label for='weight'>Enter your weight:</label>
          <input   className='input-data' placeholder='Weight in kg' onChange={(e)=>{setWeight(e.target.value);setAmount(e.target.value*50)}}></input>
          <label for='weight'>Enter your Phone number:</label>

          <input placeholder='Phone number' className='input-data'></input>
          <label for='weight'>Enter your Location:</label>
          <input placeholder='Location' className='input-data'></input>
        </form>
        <div className='payment'>
          <h4>Amount : Rs {amount}</h4>
          <div className='radio-wrap'>

        <div><input type='radio' value="cash on pickup" name="paymentMethod" onChange={(e)=>setPayment(e.target.value)}/><h5>cash on pickup</h5></div>
        <div><input type='radio' value="online payment" name="paymentMethod" onChange={(e)=>setPayment(e.target.value)}/><h5>online payment</h5></div>
      
</div>

      <button className='confirm-btn' onClick={handleSubmit}>Confirm</button>
        </div>
       </div>
    </div>
  )
}

export default Request