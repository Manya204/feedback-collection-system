import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Feedback from "./Feedback";
import "../css/ProductReview.css";

const ProductReview = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [quality, setQuality] = useState(0);
  const [value, setValue] = useState(0);
  const [easyToUse, setEasyToUse] = useState(0);
  const [overAllUse, setOverAllUse] = useState(0);
  const [recProduct, setRecProduct] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate=useNavigate();

  const handleRecProductChange = (e) => {
    setRecProduct(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const response=await fetch('http://localhost:5000/feedback/productreview',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({fName,lName,email,phoneNumber,quality,value,easyToUse,overAllUse,recProduct,feedback})
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
    <>
      <div className="d-flex">
        <div>
          <Feedback />
        </div>
        <main className="container3">
          <header className="container3">
            <h1>Product Review</h1>
          </header>
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="col">
              <div className="input-control">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fName"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                  required
                />
              </div>
              <div className="input-control">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lName"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
            </div>

            <div className="col">
              <div className="input-control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-control">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="col">
              <div className="input-control">
                <p>1) Quality</p>
                <div className="stars-container">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <span
                      key={value}
                      onClick={() => setQuality(value)}
                      style={{
                        color: value <= quality ? "gold" : "gray",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </span>
                  ))}
                </div>
              </div>

              <div className="input-control">
                <p>2) Value</p>
                <div className="stars-container">
                  {[1, 2, 3, 4, 5].map((starValue) => (
                    <span
                      key={starValue}
                      onClick={() => setValue(starValue)}
                      style={{
                        color: starValue <= value ? "gold" : "gray",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col">
            <div className="input-control">
              <p>3) Ease of Use</p>
              <div className="stars-container">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    onClick={() => setEasyToUse(value)}
                    style={{
                      color: value <= easyToUse ? "gold" : "gray",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </span>
                ))}
              </div>
            </div>

            <div className="input-control">
              <p>4) Overall Ratings</p>
              <div className="stars-container">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    onClick={() => setOverAllUse(value)}
                    style={{
                      color: value <= overAllUse ? "gold" : "gray",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </span>
                ))}
              </div>
            </div>
            </div>

            <div className="radio-group">
              <p>5) Would you recommend the product to your friends?</p>
              <div className="radio-control">
                <input
                  type="radio"
                  id="ofCourse"
                  name="recProduct"
                  value="ofCourse"
                  checked={recProduct === "ofCourse"}
                  onChange={handleRecProductChange}
                />
                <label htmlFor="ofCourse">Of course!</label>
              </div>
              <div className="radio-control">
                <input
                  type="radio"
                  id="never"
                  name="recProduct"
                  value="never"
                  checked={recProduct === "never"}
                  onChange={handleRecProductChange}
                />
                <label htmlFor="naver">Never</label>
              </div>
              <div className="radio-control">
                <input
                  type="radio"
                  id="maybe"
                  name="recProduct"
                  value="maybe"
                  checked={recProduct === "maybe"}
                  onChange={handleRecProductChange}
                />
                <label htmlFor="maybe">Maybe</label>
              </div>
            </div>

            <div className="radio-group">
              <label htmlFor="feedback">
                6) Please tell us more about your experience:
              </label>
              <textarea
                className="feedback"
                id="feedback"
                name="feedback"
                rows="4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Type here..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default ProductReview;
