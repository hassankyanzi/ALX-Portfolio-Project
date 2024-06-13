// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Hello, [User Name]</h1>
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
