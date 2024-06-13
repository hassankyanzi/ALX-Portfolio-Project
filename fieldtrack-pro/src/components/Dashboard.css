import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../features/user/userSlice';
import './Dashboard.css';

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data when the component loads
    dispatch(fetchUserData(1)); // Assuming 1 is the user ID
  }, [dispatch]);

  if (user.loading) {
    return <div>Loading...</div>;
  }

  if (user.error) {
    return <div>Error: {user.error}</div>;
  }

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
