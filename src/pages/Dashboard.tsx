import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the protected dashboard page!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
