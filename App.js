import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import CustomerList from './components/Dashboard/CustomerList';
import ServiceList from './components/Dashboard/ServiceList';
import UserProfile from './components/userProfile';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard/customers" element={<CustomerList/>} />
        <Route path="/dashboard/services" element ={<ServiceList/>} />
        <Route path="/profile" element={<UserProfile/>} />
      <Route element={<NotFound/>}/>
      </Routes>
    
    </Router>
  );
}
function NotFound(){
  return <h1>404 - Not Found</h1>;
}
export default App;
