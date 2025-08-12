import React from 'react';
import { useAuth } from '../../context/AuthContext';
import "./EmployeeDashboard.css";


const EmployeeDashboard = () => {
  const {user} = useAuth();
  return (
    <div className='container'>
      <div className='card emp-card'>
        <h2>Employee Dashboard</h2>
        <p>Welcome, <strong>{user?.user || user?.username}</strong></p>
        <section className='task'>
          <div className='card small'>My Task</div>
          <div className='card small'>Attendance</div>
        </section>
      </div>
    </div>
  );
};

export default EmployeeDashboard;