import React, {useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import "./Home.css";

const Home = () => {
  const {isAuthenticated , user} = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    if(isAuthenticated()){
      if(user?.role ==="admin") navigate("admin");
      else if (user?.role === "employee") navigate("/employee")
    }
  },[]); 
  return (
    <div className="container">
    <div className="home-card card">
      <h1>Welcome to Companay Portal</h1>
      <p className='muted'> login as admin or employee. Sign up to create new user</p>
    </div>
    <div className='home-actions'>
      <a className='btn' href='/login'> Login</a>
      <a className='btn outline' href='/signup'>SignUP</a>
    </div>
    </div>
  )
}

export default Home;