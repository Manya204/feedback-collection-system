import React, { useState } from 'react';
import Feedback from './Feedback';
import { useNavigate } from 'react-router-dom';
import "../css/StudentFeedback.css";

const StudentFeedback = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quality, setQuality] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [comment, setComment] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const response=await fetch('http://localhost:5000/feedback/studentfeedback',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({firstName,lastName,email,phone,quality,recommendation,comment})
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
    <div className='d-flex'>
      <div><Feedback/></div>
      <div className="container2">
        <h2 className="text-center" style={{ color: 'black', padding: '15px' }}>Student Feedback Form</h2>
        <form id="feedbackForm" style={{ backgroundColor: '#fff', padding: '50px' }} onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label>Review us:</label>
              <div className="form-group">
                <div className="rating">
                  <input type="radio" id="quality5" name="quality" value="5" onChange={(e) => setQuality(e.target.value)} checked={quality === '5'} /><label htmlFor="quality5"></label>
                  <input type="radio" id="quality4" name="quality" value="4" onChange={(e) => setQuality(e.target.value)} checked={quality === '4'} /><label htmlFor="quality4"></label>
                  <input type="radio" id="quality3" name="quality" value="3" onChange={(e) => setQuality(e.target.value)} checked={quality === '3'} /><label htmlFor="quality3"></label>
                  <input type="radio" id="quality2" name="quality" value="2" onChange={(e) => setQuality(e.target.value)} checked={quality === '2'} /><label htmlFor="quality2"></label>
                  <input type="radio" id="quality1" name="quality" value="1" onChange={(e) => setQuality(e.target.value)} checked={quality === '1'} /><label htmlFor="quality1"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label>Would you recommend to your friends?</label>
              <div className="form-group">
                <div className="form-check">
                  <input type="radio" id="ofCourse" name="recommendation" value="Of Course!" className="form-check-input" onChange={(e) => setRecommendation(e.target.value)} checked={recommendation === 'Of Course!'} />
                  <label htmlFor="ofCourse" className="form-check-label">Of Course!</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="never" name="recommendation" value="Never!" className="form-check-input" onChange={(e) => setRecommendation(e.target.value)} checked={recommendation === 'Never!'} />
                  <label htmlFor="never" className="form-check-label">Never</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="maybe" name="recommendation" value="Maybe" className="form-check-input" onChange={(e) => setRecommendation(e.target.value)} checked={recommendation === 'Maybe'} />
                  <label htmlFor="maybe" className="form-check-label">Maybe</label>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col">
              <label htmlFor="comment">Please tell us more about your experience:</label>
              <div className="form-group">
                <textarea id="comment" name="comment" className="form-control" rows="4" cols="12" value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-success w-100">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentFeedback;
