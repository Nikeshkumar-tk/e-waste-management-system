
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

function App() {
  const {user}=useContext(Context)
  return (
    <div className="App">
    
     {/* <userContext.Provider value={user}> */}


      <Router>
      <Topbar />
    <Routes>
      <Route exact path='/' element={user?<Home />:<Login />} />
      
     <Route path='/register' element={<Register/>}/>
     <Route path='/request' element={<Request/>} />
     <Route path='/login' element={<Login />} />
     <Route path='/dashboard' element={<Dashboard />} />
     
      
     
        
    </Routes>
      
      </Router>
     {/* </userContext.Provider> */}
    </div>
  );
}

export default App;
