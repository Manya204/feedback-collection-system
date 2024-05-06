import React from 'react';
import Feedback from './Feedback';
import "../css/StudentFeedback.css";

const StudentFeedback = () => {
  return (
    <div className='d-flex'>
    <div><Feedback/></div>
      <div className="container2">
        <h2 className="text-center" style={{ color: 'black', padding: '15px' }}>Student feedBack Form </h2>
        <form id="feedbackForm" style={{ backgroundColor: '#fff', padding: '50px' }}>
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" className="form-control" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" className="form-control" required />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="form-control" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" className="form-control" required />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="quality">1) Review us:</label>
                <div className="rating">
                  <input type="radio" id="quality5" name="quality" value="5" /><label htmlFor="quality5"></label>
                  <input type="radio" id="quality4" name="quality" value="4" /><label htmlFor="quality4"></label>
                  <input type="radio" id="quality3" name="quality" value="3" /><label htmlFor="quality3"></label>
                  <input type="radio" id="quality2" name="quality" value="2" /><label htmlFor="quality2"></label>
                  <input type="radio" id="quality1" name="quality" value="1" /><label htmlFor="quality1"></label>
                </div>
              </div>
            </div>
            <div className="col-md-6">

            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="recommendation">Would you recommend to your friends?</label>
                <div>
                  <input type="radio" id="ofCourse" name="recommendation" value="Of Course!" />
                  <label htmlFor="ofCourse">Of Course!</label>
                </div>
                <div>
                  <input type="radio" id="never" name="recommendation" value="Never!" />
                  <label htmlFor="never">Never</label>
                </div>
                <div>
                  <input type="radio" id="maybe" name="recommendation" value="Maybe" />
                  <label htmlFor="maybe">Maybe</label>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="input-group">
                <label htmlFor="comment">8) Please tell us more about your experience:</label>
                <textarea id="comment" name="comment" className="form-control" rows="4" cols="12" required></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentFeedback;
