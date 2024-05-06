import React from 'react';
import Feedback from './Feedback';

export default function FeedbackHome() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Feedback />
          <div className="px-4 pt-5 my-2 text-center border-bottom">
            <h1 className="display-4 fw-bold text-body-emphasis">Share Your Thoughts!</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">Your feedback matters! Let us know how we're doing so we can serve you better.</p>
            </div>
            <div style={{ maxHeight: "30vh" }}>
              <div className="container px-5">
                <img src="../assets/feedback.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="750" height="440" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
