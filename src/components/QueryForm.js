import React from 'react';
import "../css/QueryForm.css";
import Feedback from './Feedback';

export default function QueryForm() {
  return (
    <>
    <div className='d-flex'>
    <div><Feedback/></div>
    
      <div className="container1">
        <h1>Query Form</h1>
        <form id="queryForm">
          <label className="required" htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label className="required" htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label className="required" htmlFor="phone">Phone Number:</label>
          <div style={{ display: 'flex' }}>
            <select id="countryCode" name="countryCode" style={{ flex: '0.2', height: '50px', width: '10%' }}>
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
            </select>
            <input type="tel" id="phoneNumber" name="phoneNumber" style={{ flex: '0.8', width: '100%' }} placeholder="Enter phone number" required />
          </div>
          <label className="required" htmlFor="query">Query:</label>
          <textarea id="query" name="query" required></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
    </>
  );
}
