import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../css/Login.css";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
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
    if (email === 'adminuser@gmail.com' && password === 'root') {
        // Navigate to admin home page
        navigate('/admin/home');
      } else {
        setError('Invalid email or password');
      }
  }

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
            <span>Password</span><br/><br/>
            <i></i>
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
