import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import "./App.css";

import { useState } from "react";
import Next from "./components/Next";
import HireCompany from "./components/HireCompany";
import Consultation from "./components/Consultation";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import SalesEnquiry from "./components/SalesEnquiry";
import Footer from "./components/Footer";
import JobListing from "./components/JobListing";
// import EducationForm from "./components/EducationHistory";
import ConfirmationPage from "./components/ConformationForm";
import FeedbackForm from "./components/FeedbackForm";
import JobPost from "./components/JobPost";
// import JobDetailsForm from "./components/JobdetailsForm";

import {
  AuthProvider,
  useAuth,
} from "./components/Authentication/AuthContext.jsx";
import AdminPannel from "./AdminPanel/AdminPannel";
import Joblisting1 from "./components/Joblisting1";
import PopularSearches from "./Jobs/PopulerSearchJOb";
import Blog from "./components/Blog";
import SearchJob from "./components/SearchJob";
import FaqComponent from "./components/FaqComponents";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = email;

    if (isEmail(input)) {
    } else if (isNumber(input)) {
      // It's a valid number, handle it as a number
    } else {
      // It's neither a valid email nor a number, handle the error
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setMessage("Password reset instructions sent to your email.");
    } catch (error) {
      setMessage("Error resetting password. Please try again.");
    }
  };

  const isEmail = (input) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(input);
  };

  const isNumber = (input) => {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(input);
  };
  var toggleForm = () => {
    setShowForm(!showForm);
  };

  const closeJobPostModal = () => {
    setShowForm(false);
  };

  const emailEndsWithDomain = (email, domain) => {
    return email.endsWith("@" + domain);
  };

  const [userType, setUserType] = useState(""); // Add state for user type

  // Add a function to set the user type
  const setUser = (type) => {
    setUserType(type);
  };

  const { user } = useAuth();
  console.log("User:", user); // Check the user object
  console.log("User Email:", user?.email); // Check the user's email

  // const shouldRenderAdminPanel =
  //   user &&
  //   user?.email &&
  //   user?.email.endsWith("@allindiamarketinghrsolution.com");
  const adminEmails = [
    "rahul.md@allindiamarketinghrsolution.com",
    "nitu@allindiamarketinghrsolution.com",
    "pallavi.aimhrs@allindiamarketinghrsolution.com",
    "aimhrs.hr@allindiamarketinghrsolution.com",
  ];

  const shouldRenderAdminPanel =
    user && user?.email && adminEmails.includes(user.email);

  return (
    <>
      {/* <SearchJob /> */}
      {/* <PopularSearches /> */}
      {shouldRenderAdminPanel ? (
        <>
          <Header />
          <AdminPannel />
          <Footer />
        </>
      ) : (
        <>
          <Header />

          <Home />
          {/* <Blog /> */}
          <Next />
          <div>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.7rem",
                color: "green",
                marginTop: "2rem",
              }}
            >
              COMPANIES THAT HIRE FROM US
            </h2>
            {/* <HireCompany /> */}
            <Consultation />
            {/* <JobListing /> */}
            <Joblisting1 />
            {/* <Features /> */}
            <Reviews />
            <section className="foothero" id="foothero">
              <div className="boxx">
                <img
                  src="https://framerusercontent.com/images/1uIlwEEpRUpZTa12rq7s48QsQu0.png"
                  alt=""
                  style={{ width: "40rem" }}
                />
              </div>
              <div
                className="boxx"
                style={{ width: "53rem", marginLeft: "40px" }}
              >
                <h3 style={{ color: "green" }}>GET STARTED WITH AIMHS</h3>
                <h1 style={{ fontSize: "5rem" }}> Post a job in minutes</h1>
                <p style={{ fontSize: "2rem", width: "50rem" }}>
                  Revolutionize your hiring with our AI-powered algorithm.
                </p>
                <ol style={{ padding: "2rem", fontSize: "2rem" }}>
                  <li style={{ padding: "1rem" }}>
                    Get unlimited applications
                  </li>
                  <li style={{ padding: "1rem" }}>10x higher relevancy</li>
                  <li style={{ padding: "1rem" }}>Simplified job posting</li>
                  <li style={{ padding: "1rem" }}>
                    40% better ROI than market
                  </li>
                </ol>
                <input
                  id="submit-btn"
                  type="submit"
                  name="submit"
                  value="POST A JOB"
                  style={{
                    borderRadius: "-3rem",
                    marginLeft: "2rem",
                    fontSize: "18px",
                  }}
                  onClick={toggleForm}
                />
                {showForm && <JobPost onClose={closeJobPostModal} />}
              </div>
            </section>

            <section
              className="foothero1"
              style={{
                backgroundColor: "aliceblue",
              }}
              id="foothero1"
            >
              <div className="boxx" style={{ width: "65rem" }}>
                <h3 style={{ color: "green" }}>HIRE FASTER, HIRE BETTER</h3>
                <h1 style={{ fontSize: "5rem" }}>Introducing apnaDatabase</h1>
                <p style={{ fontSize: "2rem", width: "50rem" }}>
                  Find candidates based on location, skills, and salary
                  preferences from India’s fastest-growing talent pool.
                </p>
                <ol style={{ padding: "2rem", fontSize: "2rem" }}>
                  <li style={{ padding: "1rem" }}>5 Cr+ active job seekers</li>
                  <li style={{ padding: "1rem" }}>One click contact</li>
                  <li style={{ padding: "1rem" }}>Bulk download of profiles</li>
                </ol>
                <a href="#salesEnquiry">
                  <input
                    id="submit-btn"
                    type="submit"
                    name="submit"
                    value="Contect to sales"
                    style={{
                      borderRadius: "-3rem",
                      marginLeft: "2rem",
                      fontSize: "18px",
                    }}
                  />
                </a>
              </div>
              <div className="box">
                <img
                  src="https://framerusercontent.com/images/TKTGrBTZ7VNB1xvI2gNuY5SHfg.png"
                  alt="Apna Database"
                  loading="lazy"
                  style={{ width: "50rem" }}
                />
              </div>
            </section>
            <SalesEnquiry />
            <FaqComponent />

            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
