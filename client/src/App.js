
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

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
     
      <Router>
      
    <Routes>
      {/* <Route path='/logout' element={<Login />}/> */}
      <Route exact path='/' element={<Home />} />
      
   
     <Route path='/register' element={<Register/>}/>
     <Route path='/request' element={<Request />} />
     <Route path='/login' element={<Login />} />
     <Route path='/dashboard' element={<Dashboard />} />
     
      
     
        
    </Routes>
      
      </Router>
    </div>
  );
}

export default App;
