import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FormResponses() {
  const [counts, setCounts] = useState({
    studentFeedback: 0,
    productReview: 0,
    trainingFeedback: 0,
    queryForm: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentFeedbackCount = await axios.get(
          "http://localhost:5000/admin/studentfeedback/count"
        );
        const productReviewCount = await axios.get(
          "http://localhost:5000/admin/productreview/count"
        );
        const trainingFeedbackCount = await axios.get(
          "http://localhost:5000/admin/trainingfeedback/count"
        );
        const queryFormCount = await axios.get("http://localhost:5000/admin/queryform/count");

        setCounts({
          studentFeedback: studentFeedbackCount.data.count,
          productReview: productReviewCount.data.count,
          trainingFeedback: trainingFeedbackCount.data.count,
          queryForm: queryFormCount.data.count
        });
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="d-flex mt-5 justify-content-evenly">
        <Card
          title="Student Feedback"
          icon="person-fill"
          count={counts.studentFeedback}
          link="/admin/studentfeedback"
          color="PaleTurquoise"
        />
        <Card
          title="Product Review"
          icon="table"
          count={counts.productReview}
          link="/admin/productreview"
          color="PaleGreen"
        />
        <Card
          title="Training Feedback"
          icon="people-fill"
          count={counts.trainingFeedback}
          link="/admin/trainingfeedback"
          color="PapayaWhip"
        />
        <Card
          title="Query Form"
          icon="question-circle-fill"
          count={counts.queryForm}
          link="/admin/queryform"
          color="Lavender"
        />
      </div>
    </>
  );
}

function Card({ title, icon, count, link ,color}) {

  const cardStyle = {
    backgroundColor: color
  };

  return (
    <div className="card w-10" style={cardStyle}>
      <h5 className="card-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          className={`bi bi-${icon}`}
          viewBox="0 0 16 16"
        >
          {icon === "person-fill" && (
            <path d="M2.5 1.5A1.5 1.5 0 0 1 4 0h8a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2.5 3v-2zm7.5 4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM8 7c-2.5 0-4 1.5-4 4v1h8v-1c0-2.5-1.5-4-4-4z" />
          )}
          {icon === "table" && (
            <path d="M14 0H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm0 1a1 1 0 0 1 1 1v2H1V2a1 1 0 0 1 1-1h12zm0 3V2H2v2h12zm-1 3H2v2h11V7zm0 3H2v2h11v-2zm0 3H2v2h11v-2z" />
          )}
          {icon === "people-fill" && (
            <path d="M15 15s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
          )}
          {icon === "question-circle-fill" && (
            <>
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm.5-6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </>
          )}
        </svg>
      </h5>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          &nbsp; &nbsp; &nbsp; {count} new updates ! &nbsp; &nbsp; &nbsp;
        </p>
        <Link to={link} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
}
