import React, { useState } from 'react'
import './Request.css'
import axios from 'axios'

const Request = () => {
 const [payment,setPayment]=useState('')
    
  return (
    <div className='request-main'>
      <h3>Make your new request for pick up</h3>
        <div className='request-inner'>
            <form>

     <div className='pair'> <h4>Enter the wait of waste:</h4>  <input type='text' className='input-text' placeholder='weight'/></div>
     <div className='pair'> <h4>Enter your phone no :</h4>  <input type='text' className='input-text2' placeholder='weight'/></div>
        <button className='request-btn' type='submit' onClick={()=>console.log(payment)}>set payment</button>
        <h4 className='pay-meth-hed'>Select payment method</h4>
        <div onChange={(e)=>setPayment(e.target.value)}>

        <input type='radio' value="cash on delivery" name="paymentMethod"/><h5>cash on delvery</h5>
        </div>
        
            </form>
        </div>
    </div>
  )
}

export default Request