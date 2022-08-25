import React from 'react'
import './Dashboard.css'
import axios from 'axios'

const Dashboard = () => {
  return (
    <div className='dashboard-wrap'>
        <div className='headings'>
            <h4 className='c-requests'>Completed pickups</h4>
            <h4 className='a-requests'>Active requests</h4>
        </div>
        <section className='details'>
<div className='detail-list'>
    <h5 className='weight'>weight: 50kg</h5>
    <h5 className='address'>Address:kunnamkulam</h5>
    <h4>Amount:RS 100</h4>

    <h5 className='payment'>Payment method:Cash on delivery</h5>

</div>
        </section>
        <button className='request-btn'>New Request</button>
        </div>
  )
}

export default Dashboard