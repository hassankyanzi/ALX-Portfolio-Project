import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { setUser } from '../features/user/userSlice';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the setUser action
    dispatch(setUser({ name: 'John Doe', email }));
    // Navigate to the Dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h1>FieldTrack Pro</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button className="link-button" onClick={() => alert('Forgot Password Clicked!')}>
        Forgot Password?
      </button>
    </div>
  );
};

export default Login;
