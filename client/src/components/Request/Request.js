import React, { useState,useContext, useRef} from 'react'
import './Request.css'
import axios from 'axios'
import { Context } from '../../context/Context'
// import { userContext } from '../../App'

const Request = () => {
  const {user,dispatch,isFetching}=useContext(Context)
 const [payment,setPayment]=useState('')
 const [weight,setWeight]=useState()
 const [amount,setAmount]=useState()
 const [total,setTotal] = useState(0)
 const largehouseHoldRef = useRef()
 const smallhouseHoldRef = useRef()
 const personalDeviceRef = useRef()
 const batteriesRef = useRef()
 const lightningRef = useRef()
 const electrictoolsRef = useRef()
 const [paymentmode,setPaymentMode]=useState(false)
 
//  const findAmount=(e)=>{
//   e.preventDefault()
//   let am=weight*50
//   setAmount(am)
//   console.log(user)
//   setPaymentMode(true)
//  }
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
      amount:total,
      email:user.email,
      district:user.district
    })
    console.log(res)
    res&&(payment == "online payment"?window.location.replace("/payment"):window.location.replace(`/dashboard/requestdetails/${res.data._id}`))
  }catch(err){
    console.log(err)
  }
  
 }
 const findTotal = async() => {

  const totalWeight = parseInt(largehouseHoldRef.current.value) + parseInt(smallhouseHoldRef.current.value) + parseInt(personalDeviceRef.current.value) + parseInt(lightningRef.current.value) + parseInt(batteriesRef.current.value) + parseInt(electrictoolsRef.current.value)
  console.log(typeof(totalWeight))
  setWeight(totalWeight)
 console.log(totalWeight)
  const largehouseHold = largehouseHoldRef.current.value*150;
  const smallhouseHold = smallhouseHoldRef.current.value*60;
  const personalDevice = personalDeviceRef.current.value*50;
  const lightningDevice = lightningRef.current.value*55;
  const batteries = batteriesRef.current.value*80;
  const electricTools = electrictoolsRef.current.value*50;
  

    const total =  largehouseHold + smallhouseHold + personalDevice + lightningDevice + batteries + electricTools 
    
setTotal(total);

  }
    
  return (
   <>
   <section className='request-section'>
    <header>
      <marquee>Minimum weight of 5kg is required to book your pickUp</marquee>
    </header>
    <main className='request-main'>
      <table className='request-table'>
        <thead>

        <tr>
          <th>Category</th>
          <th>Weight</th>
          <th>Amount</th>
        </tr>
        </thead>
        <tbody>

        <tr>
          <td>Large household devices</td>
          <td> <div> <input ref={largehouseHoldRef}/></div></td>
          <td>₹150/1 kg</td>
        </tr>
        <tr>
          <td>small household devices</td>
          <td> <div> <input ref={smallhouseHoldRef}/></div></td>
          <td>₹60/1 kg</td>
        </tr>
        <tr>
          <td>small personal device</td>
          <td> <div> <input ref={personalDeviceRef}/></div></td>
          <td>₹50/1 kg</td>
        </tr>
        <tr>
          <td>lightning equipments</td>
          <td> <div> <input ref={lightningRef}/></div></td>
          <td>₹55/1 kg</td>
        </tr>
        <tr>
          <td>Large batteries</td>
          <td> <div> <input ref={batteriesRef}/></div></td>
          <td>₹80/1 kg</td>
        </tr>
        <tr>
          <td>electric tools</td>
          <td> <div> <input ref={electrictoolsRef}/></div></td>
          <td>₹50/1 kg</td>
        </tr>
        <tr>
          <td><button className='find-total' onClick={() => findTotal()}>Find Total</button></td>
          <td></td>
          <td>Total amount:{total}</td>
        </tr>
        </tbody>
      </table>
      <div className='payment-data'>
        <h3>Select your payment</h3>
        <p>Amount payable : {total}</p>
        <form>

        <div className='radio-wrap'>

<div><input type='radio' value="cash on pickup" name="paymentMethod" onChange={(e)=>setPayment(e.target.value)}/><h5>cash on pickup</h5></div>
<div><input type='radio' value="online payment" name="paymentMethod" onChange={(e)=>setPayment(e.target.value)}/><h5>online payment</h5></div>

</div>
<button onClick={handleSubmit}>Confirm</button>
        </form>
      </div>
    </main>
   </section>
   </>
  )
}

export default Request