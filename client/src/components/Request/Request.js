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
    res&&window.location.replace(`/dashboard/requestdetails/${res.data._id}`)
  }catch(err){
    console.log(err)
  }
  
 }
    
  return (
    <div className='request-main'>
   <u>   <h3>Make your new request for pick up</h3></u>
       <div className='request-inner'>
        <form className='request-frm'>
          <label for='weight'>Enter your weight:</label>
          <input type='text' id='weight' placeholder='Weight in kg' onChange={(e)=>setWeight(e.target.value)}></input>
          <label for='weight'>Enter your Phone number:</label>

          <input placeholder='Phone number' ></input>
        <button type='submit'  onClick={(e)=>findAmount(e)}> See Pyment Details</button>
        </form>
       { paymentmode&&<div className='payment'>
          {amount&&<h4>Amount : {amount}</h4>}
          <div className='radio-wrap'>

        <input type='radio' value="cash on pickup" name="paymentMethod" onChange={(e)=>setPayment(e.target.value)}/><h5>cash on pickup</h5>
        <input type='radio' value="online payment" name="paymentMethod" onChange={(e)=>setPayment(e.target.value)}/><h5>online payment</h5>
        {
 (payment==='online payment')?(<div>
<h4 className='card-enter'>Enter your debit card details :</h4><input type='text' className='card-num'></input></div>):null
        }
</div>
        </div>}
       </div>
    </div>
  )
}

export default Request