import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/QueryForm.css";
import Feedback from './Feedback';

export default function QueryForm() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const[query,setQuery]=useState('');
  const[countryCode,setCountryCode]=useState('+91');
  const navigate = useNavigate();

  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
      const response=await fetch('http://localhost:5000/feedback/queryform',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({name,email,countryCode,phone,query})
      }
      )
      if(!response.ok)
        {
          throw new Error('Could not process your request');
        }
        navigate("/feedback/home")
    }
    catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className='d-flex'>
    <div><Feedback/></div>
    
      <div className="container1">
        <h1>Query Form</h1>
        <form id="queryForm" onSubmit={handleSubmit}>
          <label className="required" htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required />
          <label className="required" htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <label className="required" htmlFor="phone">Phone Number:</label>
          <div style={{ display: 'flex' }}>
            <select id="countryCode" name="countryCode" style={{ flex: '0.2', height: '50px', width: '10%' }} value={countryCode} onChange={(e)=>setCountryCode(e.target.value)}>
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+61">+52</option>
              <option value="+61">+86</option>
              <option value="+61">+90</option>
              <option value="+61">+30</option>
              <option value="+61">+33</option>
              <option value="+61">+36</option>
            </select>
            <input type="tel" id="phoneNumber" name="phoneNumber" style={{ flex: '0.8', width: '100%' }} placeholder="Enter phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} required />
          </div>
          <label className="required" htmlFor="query">Query:</label>
          <textarea id="query" name="query" value={query} onChange={(e)=>setQuery(e.target.value)} required/>
          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
    </>
  );
}
