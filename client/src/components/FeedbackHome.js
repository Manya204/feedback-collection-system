import React from 'react';
import Feedback from './Feedback';

export default function FeedbackHome() {
  return (
    <div className="d-flex justify-content-center align-items-center" >
        <Feedback />
        <div className="px-4 pt-3 my-2 text-center border-bottom ">
          <h1 className="display-4 fw-bold text-body-emphasis">Share Your Thoughts!</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Your feedback matters! Let us know how we're doing so we can serve you better.</p>
          </div>
          <div >
            <div className="container px-5">
              <img src="../assets/feedback.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="750" height="420" loading="lazy" />
            </div>
          </div>
        </div>
    </div>
  );
}
