import React, { useState, useEffect } from "react";
import axios from "axios";

function ShowStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/studentfeedback")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  // Function to export student feedback data to CSV format
  const exportToCSV = () => {
    // Prepare CSV data
    const csvData = [
      Object.keys(students[0]).join(","),
      ...students.map((student) =>
        Object.values(student)
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
    link.setAttribute("download", "student_feedback.csv");

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
          Student Feedback Results
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
            <th>Quality</th>
            <th>Recommendation</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.quality}</td>
              <td>{student.recommendation}</td>
              <td>{student.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ShowStudent;
