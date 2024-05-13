import React, { useState, useEffect } from "react";
import axios from "axios";

function ShowTraining() {
  const [trainingFeedback, setTrainingFeedback] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/trainingfeedback")
      .then((response) => {
        setTrainingFeedback(response.data);
      })
      .catch((error) => {
        console.error("Error fetching training feedback:", error);
      });
  }, []);

  // Function to export training feedback data to CSV format
  const exportToCSV = () => {
    // Prepare CSV data
    const csvData = [
      Object.keys(trainingFeedback[0]).join(","),
      ...trainingFeedback.map((training) =>
        Object.values(training)
          .map((value) => (typeof value === "string" ? `"${value}"` : value))
          .join(",")
      ),
    ].join("\n");

    // Create a Blob containing the CSV data
    const blob = new Blob([csvData], { type: "text/csv" });

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary link element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "training_feedback.csv");

    // Simulate a click on the link to trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up by revoking the URL and removing the link element
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="display-5 fw-bold pb-2 mt-5 border-bottom text-center col">
          Training Feedback Results
        </h2>
        <div className="ml-auto">
          {/* Button to trigger exportToCSV function */}
          <button
            type="button"
            className="btn btn-primary"
            style={{ height: "50px" }}
            onClick={exportToCSV}
          >
            Export
          </button>
        </div>
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Enjoyed Most</th>
            <th>Key Learnings</th>
            <th>Confusing Subject</th>
            <th>Trainer Rating</th>
            <th>Overall Rating</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {trainingFeedback.map((training, index) => (
            <tr key={training._id}>
              <td>{index + 1}</td>
              <td>{training.firstName}</td>
              <td>{training.lastName}</td>
              <td>{training.email}</td>
              <td>{training.phoneNumber}</td>
              <td>{training.enjoyedMost}</td>
              <td>{training.keyLearnings}</td>
              <td>{training.confusingSubject}</td>
              <td>{training.trainerRating}</td>
              <td>{training.overallRating}</td>
              <td>{training.additionalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ShowTraining;
