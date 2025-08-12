import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';



const EmployeeRoute = ({children}) => {
  const {user, isAuthenticated} = useAuth();
  if(!isAuthenticated()) return <Navigate to="login" replace />;
  if(user?.role !== "employee") return <Navigate to="/" replace />;
  return children 
}

export default EmployeeRoute