import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';
import './Dashboard.css';

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({ name: 'John Doe', email: 'john@example.com' }));
  };

  return (
    <div className="dashboard-container">
      <h1>Hello, {user.name || 'Guest'}</h1>
      <div className="stats">
        <div>Today's Tasks: 5</div>
        <div>Completed Tasks: 2</div>
      </div>
      <button onClick={handleLogin}>Simulate Login</button>
      <button>View Tasks</button>
      <button>Map</button>
      <button>Profile</button>
    </div>
  );
};

export default Dashboard;
