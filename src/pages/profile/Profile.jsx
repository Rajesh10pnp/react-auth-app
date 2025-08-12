import React from 'react';
import { useAuth } from '../../context/AuthContext';


const Profile = () => {
  const user = useAuth();
  return (
    <div className='container'>
      <div className='card'>
        <h2>Profile</h2>
        <p><strong>Name:</strong>{user?.name}</p>
        <p><strong>Username:</strong>{user?.username}</p>
        <p><strong>Role:</strong>{user?.role}</p>
      </div>
    </div>
  )
}

export default Profile