import React, { useState, useEffect } from "react";
import axios from "axios";

function ShowProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/productreview")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const exportToExcel = () => {
    // Prepare data for Excel export
    const dataToExport = products.map((product) => ({
      S_No: product._id,
      Firstname: product.fName,
      Lastname: product.lName,
      Email: product.email,
      Phone_Number: product.phoneNumber,
      Quality: product.quality,
      Value: product.value,
      Easy_to_use: product.easyToUse,
      Overall_Use: product.overAllUse,
      Recommendation: product.recProduct,
      Feedback: product.feedback,
    }));

    // Convert data to CSV format
    const csvData = [
      Object.keys(dataToExport[0]).join(","),
      ...dataToExport.map((item) =>
        Object.values(item)
          .map((value) => (typeof value === "string" ? `"${value}"` : value))
          .join(",")
      ),
    ].join("\n");

    // Create a temporary anchor element to trigger the download
    const downloadLink = document.createElement("a");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.setAttribute("download", "product_review.csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="display-5 fw-bold pb-2 mt-5 border-bottom text-center col">
          Product Review Results
        </h2>
        <button
          type="button"
          className="btn btn-primary"
          style={{ height: "50px" }}
          onClick={exportToExcel}
        >
          Export
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Quality</th>
            <th>Value</th>
            <th>Easy to use</th>
            <th>Overall Use</th>
            <th>Recommendation</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.fName}</td>
              <td>{product.lName}</td>
              <td>{product.email}</td>
              <td>{product.phoneNumber}</td>
              <td>{product.quality}</td>
              <td>{product.value}</td>
              <td>{product.easyToUse}</td>
              <td>{product.overAllUse}</td>
              <td>{product.recProduct}</td>
              <td>{product.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ShowProduct;
