import React from 'react';
import { useAuth } from '../../context/AuthContext';
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const {user} = useAuth();
  return (
    <div className='container'>
      <div className='card admin-card'>
        <h2>Admin Dashboard</h2>
        <p>Welcome, <strong>{user?.name || user?.username}</strong></p>
        <section className='admin-grid'>
          <div className='card small'>Manage User</div>
          <div className='card small'>Reports</div>
          <div className='card small'>Setting</div>
        </section>
      </div>
    </div>
  )
}

export default AdminDashboard