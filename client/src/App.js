
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {BrowserRouter as Router,
  Routes,
  Route,
  Link} from "react-router-dom";
import Request from './components/Request/Request';
import Dashboard from './components/UserDashboard/Dashboard';
import { createContext, useContext, useState } from 'react';
// export const userContext=createContext()
import { Context } from './context/Context';
import Topbar from './components/Topbar/Topbar';
import Admin from './components/Admin/Admin';
import Adminlogin from './components/Adminlogin/Adminlogin';
import SinglePadeDetails from './components/singlePageRequestDetails/SinglePadeDetails';
import UserDetails from './components/UserDetailsAdminSide/UserDetails';

function App() {
  const {user}=useContext(Context)
  const [adminMode,setAdminMode]=useState(false)
  const [adminUser,setAdminUser]=useState('')
  
console.log(adminUser)
  
  return (
    <div className="App">
    
     {/* <userContext.Provider value={user}> */}


      <Router>
        {

    !adminMode&&  <Topbar setAdminMode={setAdminMode}/>
        }
    <Routes>
      <Route exact path='/' element={<Home />} />
      
     <Route path='/register' element={<Register/>}/>
     <Route path='/request' element={<Request/>} />
     <Route path='/login' element={<Login />} />
     <Route path='/dashboard' element={<Dashboard />} />
     <Route path='/admin/dashboard' element={adminUser!=null?<Admin setAdminMode={setAdminMode} adminUser={adminUser}/>:<Adminlogin />}/>
     <Route path='/admin/dashboard/userdetails/:id' element={adminUser!=null?<UserDetails setAdminMode={setAdminMode} adminUser={adminUser}/>:<Adminlogin />}/>

     <Route path='/admin' element={<Adminlogin setAdminMode={setAdminMode} setAdminUser={setAdminUser} />}/>
     <Route path='/dashboard/requestdetails/:id' element={<SinglePadeDetails />}/>
      
     
        
    </Routes>
      
      </Router>
     {/* </userContext.Provider> */}
    </div>
  );
}

export default App;
