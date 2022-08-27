import React, { useContext } from 'react'
import './Topbar.css'
import{Link} from 'react-router-dom'
import { Context } from '../../context/Context'

const Topbar = () => {
    const {dispatch,user}=useContext(Context)
    const handleLogOut=()=>{
        dispatch({type:"LOG_OUT"})
        window.location.replace("/login")
    }
  return (
    <div className='topbar-wrap'><h4>PickUp</h4>
    <ul>
        <Link to='/' className='link'>

        <li>Home</li>
        </Link>
        <Link to='/request' className='link'>

        <li>Book PickUp</li>
        </Link>
        <li>Dashboard</li>
{       !user?(
        <Link to='/login' className='link'>
        <li >Login</li>
        </Link>):
        <li onClick={handleLogOut}>Logout</li>
}
    </ul>
    </div>
  )
}

export default Topbar