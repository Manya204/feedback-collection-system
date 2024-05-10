import React, { useState } from 'react';
import Feedback from './Feedback';
import '../css/TrainingFeedback.css';
import { useNavigate } from 'react-router-dom';

function TrainingFeedback() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [enjoyedMost, setEnjoyedMost] = useState('');
  const [keyLearnings, setKeyLearnings] = useState('');
  const [confusingSubject, setConfusingSubject] = useState('');
  const [trainerRating, setTrainerRating] = useState('');
  const [overallRating, setOverallRating] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
    const response=await fetch('http://localhost:5000/feedback/trainingfeedback',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({firstName,lastName,email,phoneNumber,enjoyedMost,keyLearnings,confusingSubject,trainerRating,overallRating,additionalComments})
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
      <div className="feedback-container">
        <h1>Training Feedback</h1>
        <form onSubmit={handleSubmit}>
          <div className="question">
            <label>
              First Name<span className="required">*</span>:
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </label>
          </div>
          <div className="question">
            <label>
              Last Name<span className="required">*</span>:
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </label>
          </div>
          <div className="question">
            <label>
              Email<span className="required">*</span>:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
          </div>
          <div className="question">
            <label>
              Phone Number<span className="required">*</span>:
              <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </label>
          </div>
          <div className="question">
            <label>
              What did you enjoy most about the training?<span className="required">*</span>:
              <textarea value={enjoyedMost} onChange={(e) => setEnjoyedMost(e.target.value)} required></textarea>
            </label>
          </div>
          <div className="question">
            <label>
              Please list 2-3 key learnings from today's curriculum, and how you anticipate applying them to your work in the future.<span className="required">*</span>:
              <textarea value={keyLearnings} onChange={(e) => setKeyLearnings(e.target.value)} required></textarea>
            </label>
          </div>
          <div className="question">
            <label>
              Was there any subject matter that you found confusing? If so, please provide specific examples.
              <textarea value={confusingSubject} onChange={(e) => setConfusingSubject(e.target.value)}></textarea>
            </label>
          </div>
          <div className="question">
            <label>
              Please rate your trainer<span className="required">*</span>:
              <select value={trainerRating} onChange={(e) => setTrainerRating(e.target.value)} required>
                <option value="">Select</option>
                <option value="1">1 - Worst</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 - Best</option>
              </select>
            </label>
          </div>
          <div className="question">
            <label>
              Please rate the overall training<span className="required">*</span>:
              <select value={overallRating} onChange={(e) => setOverallRating(e.target.value)} required>
                <option value="">Select</option>
                <option value="1">1 - Worst</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 - Best</option>
              </select>
            </label>
          </div>
          <div className="question">
            <label>
              Any additional comments you wish to share?
              <textarea value={additionalComments} onChange={(e) => setAdditionalComments(e.target.value)}></textarea>
            </label>
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-success w-100">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TrainingFeedback;
