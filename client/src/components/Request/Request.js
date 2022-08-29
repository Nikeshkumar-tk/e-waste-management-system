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
 
 const findAmount=(e)=>{
  e.preventDefault()
  let am=weight*50
  setAmount(am)
  console.log(user)
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
    res&&window.location.replace(`/dashboard/requestdetails/${res.data._id}`)
  }catch(err){
    console.log(err)
  }
  
 }
    
  return (
    <div className='request-main'>
      <h3>Make your new request for pick up</h3>
        <div className='request-inner'>
            <form >

     <div className='pair'> <h4>Enter the wait of waste :</h4>  <input type='text' className='input-text' placeholder='weight in kg' onChange={(e)=>{setWeight(e.target.value)}}/></div>
     <div className='pair'> <h4>Enter your phone no :</h4>  <input type='text' className='input-text2' placeholder='phone number'/></div>
     <div className='amt-wrap'>
     <button className='payment-btn' onClick={findAmount}>see amount</button><h4 className='amt'>:  ₹ {amount}</h4>
      </div>
        <h4 className='pay-meth-hed'>Select payment method</h4>
       
       
<div className='radio-wrap'>

        <input type='radio' value="cash on pickup" name="paymentMethod" onChange={(e)=>setPayment(e.target.value)}/><h5>cash on pickup</h5>
        <input type='radio' value="online payment" name="paymentMethod" onChange={(e)=>setPayment(e.target.value)}/><h5>online payment</h5>
        {
 (payment==='online payment')?(<div>
<h4 className='card-enter'>Enter your debit card details :</h4><input type='text' className='card-num'></input></div>):null
        }
</div>
<button className='confirm-btn' onClick={handleSubmit}>confirm</button>

        
            </form>
        </div>
    </div>
  )
}

export default Request