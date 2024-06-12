// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';
import { useAuth } from '../AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <div className="login-container">
      <h1>FieldTrack Pro</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <a href="#">Forgot Password?</a>
    </div>
  );
};

export default Login;
