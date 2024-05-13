import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../css/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Invalid email address');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }
      // setIsLoggedIn(true);
      navigate("/loggedin/home");
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div style={{ margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'poppins, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'whitesmoke' }}>
      <div className="box">
        <span className="borderLine"></span>
        <form onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          <div className="inputBox">
            <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="#">Forgot password?</a>
            <Link to="/signup">Signup</Link>
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
