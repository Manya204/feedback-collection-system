import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../css/Login.css";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Invalid email address');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div style={{ margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'poppins, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#23242a' }}>
      <div className="box">
        <span className="borderLine"></span>
        <form onSubmit={handleSubmit}>
          <h2>Sign up</h2>
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
          <div className="inputBox">
            <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <span>Confirm Password</span>
            <i></i>
          </div>
        <div className="links">
          <Link to="/login">Already have an account? Login</Link>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
          <input type="submit" value="Signup" />
          </form>
      </div>
    </div>
  );
};

export default Signup;
