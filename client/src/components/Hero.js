import React from "react";

export default function Hero() {
  return (
    <>
      <h2 className="display-5 fw-bold pb-2 border-bottom text-center"></h2>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="../assets/specialities.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Specialties
            </h1>
            <h2 className="lead ">
              Software development, data science, web development, android app
              development, data science, ui / ux design, frontend, backend, full
              stack, jobs, internship, career growth, Custom Software
              Development, Agile Methodologies, Data Analytics and Business
              Intelligence, E-commerce Solutions, Cross-Platform Compatibility,
              and Scalable and Robust System Architecture.
            </h2>
            <h2 className="fw-bold">Join Us Now!!</h2>
          </div>
        </div>
      </div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-lg-6">
            <img
              src="../assets/programs.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Programs
            </h1>
            <h2 className="lead">
              Mentorship Programs • Online Training Courses • Leadership
              Development Workshops • Certification Opportunities • Regular
              Performance Reviews • Cross-Functional Project Experience • Tech
              Conferences Participation • Innovation Challenges • Peer Learning
              Sessions • Advanced Tech Webinars • Employee Skill-Building
              Programs • Professional Growth Plans • Feedback and Coaching
              Sessions • Collaborative Learning Platforms • Internal Knowledge
              Sharing Sessions
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
