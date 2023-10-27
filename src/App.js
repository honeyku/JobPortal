import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import "./App.css";

import { useState } from "react";
import Next from "./components/Next";
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
import { Helmet } from "react-helmet";
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
  // console.log("User:", user); // Check the user object
  // console.log("User Email:", user?.email); // Check the user's email

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
      <div style={{ overflowX: "hidden" }}>
        <Helmet>
          <title>
            All India Marketing HR Solutions | Post a Job | Hire Candidates
          </title>
          <meta
            name="description"
            content="Connect with top talent or find your dream job with AIMHRS - Noida's leading job portal. Post job listings, explore employment opportunities, and hire skilled candidates effortlessly."
          />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="keywords"
            content="All India Marketing HR Solution, AIMHRS, Jobs In Noida, Hire Candidates, Jobs in Delhi, Post Free Jobs, Post Free Jobs in India,Discover your ideal job or connect with top talent effortlessly with All India Marketing HR Solution, Noida's leading job portal. Post job listings, explore diverse employment opportunities, and streamline your hiring process with us. Find your perfect fit in the dynamic Indian job market today! "
          />
          <meta name="ROBOTS" content="index, follow" />
          <link
            rel="shortcut icon"
            href="./components/Images/AIMHS.png"
            type="image/x-icon"
          />
          <meta name="ROBOTS" content="ALL" />
          <meta name="Slurp" content="index,follow,archive" />
          <meta name="robots" content="NOODP" />
          <meta name="geo.region" content="IN" />
          <meta name="allow-search" content="yes" />
          <meta name="revisit-after" content="daily" />
          <meta name="distribution" content="global" />
          <link
            rel="canonical"
            href="https://allindiamarketinghrsolution.com/"
          />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "All India Marketing HR Solutions",
              "url": "https://allindiamarketinghrsolution.com",
              "logo": "./components/Images/AIMHS.png",
              "description":
                "Specialized in recruitment, staffing, and HR consulting.",
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is AIMHRS?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "AIMHRS is a dynamic job portal based in India, dedicated to connecting job seekers with prospective employers in the Noida region and beyond. Full form is ALL India Marketing HR Solution.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "How do I create an account on AIMHRS?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      'To create an account on AIMHRS, click on the "Sign Up" button on our homepage. Fill in the required details, and you\'re all set to start your job search.',
                  },
                },
                {
                  "@type": "Question",
                  "name":
                    "Can I search for jobs in specific industries or sectors?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Yes, absolutely! AIMHRS offers a robust search feature that allows you to filter jobs by industry, location, experience level, and more, ensuring you find the perfect match for your skills and preferences.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Is AIMHRS only for local job seekers in Noida?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "While AIMHRS is headquartered in Noida, we cater to job seekers and employers across various locations. Our platform is designed to facilitate job placements on a broader scale.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "How can employers post job listings on AIMHRS?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Employers can easily post job listings on AIMHRS by creating an employer account and filling in the necessary job details. Our user-friendly interface ensures a seamless posting process.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Is there a fee for using AIMHRS as a job seeker?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "No, AIMHRS offers its services to job seekers completely free of charge. You can browse job listings, apply for positions, and access various resources without any cost.",
                  },
                },
                {
                  "@type": "Question",
                  "name":
                    "Can I receive job alerts for new listings matching my preferences?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Yes, AIMHRS offers a job alert feature. Simply set your preferences (industry, location, etc.), and we'll notify you when new listings that match your criteria are posted.",
                  },
                },
                {
                  "@type": "Question",
                  "name":
                    "How can I edit my profile or update my resume on AIMHRS?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Log in to your AIMHRS account, go to your profile, and you'll find options to edit your details and upload or update your resume.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Can I apply for jobs through my mobile phone?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Absolutely! AIMHRS is designed to be mobile-friendly. You can easily browse job listings, apply for positions, and manage your account from your mobile device.",
                  },
                },
                {
                  "@type": "Question",
                  "name":
                    "How can I get in touch with the support team at AIMHRS?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "You can reach out to our support team through the \"Contact Enquiry” Section on our website. We're here to assist you with any queries or concerns you may have.",
                  },
                },
              ],
            })}
          </script>
                
        </Helmet>
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
              <Blog />
              <section className="foothero" id="foothero">
                <div className="boxx">
                  <div className="system">
                    <img
                      src="https://framerusercontent.com/images/1uIlwEEpRUpZTa12rq7s48QsQu0.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="boxx"
                  style={{ width: "100%", marginLeft: "0", padding: "20px" }}
                >
                  <h3 style={{ color: "green" }}>GET STARTED WITH AIMHS</h3>
                  <h1 style={{ fontSize: "4rem", marginBottom: "20px" }}>
                    Post a job in minutes
                  </h1>
                  <p style={{ fontSize: "2rem", width: "100%" }}>
                    Revolutionize your hiring with our AI-powered algorithm.
                  </p>
                  <ol style={{ padding: "20px", fontSize: "2rem" }}>
                    <li style={{ padding: "10px" }}>
                      Get unlimited applications
                    </li>
                    <li style={{ padding: "10px" }}>10x higher relevancy</li>
                    <li style={{ padding: "10px" }}>Simplified job posting</li>
                    <li style={{ padding: "10px" }}>
                      40% better ROI than the market
                    </li>
                  </ol>
                  <input
                    id="submit-btn"
                    type="submit"
                    name="submit"
                    value="POST A JOB"
                    style={{
                      borderRadius: "-3px",
                      margin: "20px 0",
                      fontSize: "2rem",
                      padding: "10px 20px",
                    }}
                    onClick={toggleForm}
                  />
                  {showForm && <JobPost onClose={closeJobPostModal} />}
                </div>
              </section>

              <section
                className="foothero"
                style={{
                  backgroundColor: "aliceblue",
                }}
                id="database"
              >
                <div className="boxx">
                  <h3 style={{ color: "green" }}>HIRE FASTER, HIRE BETTER</h3>
                  <h1 style={{ fontSize: "4rem" }}>Introducing Database</h1>
                  <p style={{ fontSize: "2rem", width: "70%" }}>
                    Find candidates based on location, skills, and salary
                    preferences from India’s fastest-growing talent pool.
                  </p>
                  <ol style={{ padding: "2rem", fontSize: "2rem" }}>
                    <li style={{ padding: "1rem" }}>
                      5 Cr+ active job seekers
                    </li>
                    <li style={{ padding: "1rem" }}>One click contact</li>
                    <li style={{ padding: "1rem" }}>
                      Bulk download of profiles
                    </li>
                  </ol>
                  <a href="#salesEnquiry">
                    <input
                      id="submit-btn"
                      type="submit"
                      name="submit"
                      value="Contact to sales"
                      style={{
                        borderRadius: "-3rem",
                        marginLeft: "2rem",
                        fontSize: "18px",
                      }}
                    />
                  </a>
                </div>
                <div className="boxx">
                  <div className="system">
                    <img
                      src="https://framerusercontent.com/images/TKTGrBTZ7VNB1xvI2gNuY5SHfg.png"
                      alt="Apna Database"
                      loading="lazy"
                    />
                  </div>
                </div>
              </section>
              <SalesEnquiry />
              <FaqComponent />

              <Footer />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
