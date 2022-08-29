import React, { useContext } from 'react'
import './Topbar.css'
import{Link} from 'react-router-dom'
import { Context } from '../../context/Context'

const Topbar = ({setAdminMode}) => {
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
        <Link to='/dashboard' className='link'>

        <li>Dashboard</li>
        </Link>
{       !user?(
        <Link to='/login' className='link'>
        <li >Login</li>
        </Link>):
        <li onClick={handleLogOut}>Logout</li>
}
<Link to='/admin' className='link' onClick={()=>setAdminMode(current=>!current)}>

<li>Admin</li>
</Link>
{user?<li>username : {user.username}</li>:""}
    </ul>
    </div>
  )
}

export default Topbar