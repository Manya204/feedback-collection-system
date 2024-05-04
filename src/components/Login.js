import React from 'react';
import "../css/Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'poppins, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#23242a'}}>
      <div className="box">
        <span className="borderLine"></span>
        <form>  
          <h2>Sign in </h2>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="#">Forget password</a>
            <Link to="/signup">Signup</Link>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
