import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <>
      <Nav />
      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold text-body-emphasis">About Us </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Our core values of integrity, excellence, and collaboration guide
            everything we do. We believe in transparency, honesty, and
            accountability in all our interactions, ensuring that our clients
            receive the highest standard of service and support.
          </p>
        </div>
        <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h2 class="fw-bold text-body-emphasis">
                Our belief is in the efficacy of teamwork, ongoing education,
                and flexibility in response to the always changing digital
                terrain.
              </h2>
              <p class="lead">
                {" "}
                What sets us apart is our commitment to understanding our
                clients' unique needs and tailoring our services to meet those
                requirements effectively.{" "}
              </p>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                class="rounded-lg-3"
                src="./assets/about.jpg"
                alt=""
                width="720"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container px-4 py-5">
        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div class="col d-flex flex-column align-items-start gap-2">
            <h2 class="fw-bold text-body-emphasis">
              Unlock your potential with our comprehensive training programs and
              internship opportunities. Start your journey towards success
              today!
            </h2>
            <p class="text-body-secondary">
              Explore our diverse range of programs designed to empower you on
              your path to excellence. Transform your aspirations into
              achievements with us.
            </p>
          </div>

          <div class="col">
            <div class="row row-cols-1 row-cols-sm-2 g-4">
              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Abhishek Kumar
                </h4>
                <p class="text-body-secondary">
                  Database Manager abhishek204kumar@gmail.com
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Aman Singh
                </h4>
                <p class="text-body-secondary">
                  Backend Developer amansinghh@gmail.com
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Rishi Singh Bedi
                </h4>
                <p class="text-body-secondary">
                  Frontend Developer rishi20040@gmail.com
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Akshit Grover
                </h4>
                <p class="text-body-secondary">
                  Assistant Backend Developer akshitgrover3087@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
