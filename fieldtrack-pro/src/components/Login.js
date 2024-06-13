import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>FieldTrack Pro</h1>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Email" />
        <label>Password:</label>
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <button className="link-button" onClick={() => alert('Forgot Password Clicked!')}>
        Forgot Password?
      </button>
    </div>
  );
};

export default Login;
