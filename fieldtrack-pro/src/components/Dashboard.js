import React from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.css';

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="dashboard-container">
      <h1>Hello, {user.name || 'Guest'}</h1>
      <div className="stats">
        <div>Today's Tasks: 5</div>
        <div>Completed Tasks: 2</div>
      </div>
      <button>View Tasks</button>
      <button>Map</button>
      <button>Profile</button>
    </div>
  );
};

export default Dashboard;
