// SearchJob.js
import React from "react";
import "../components/css/SearchJob.css";

const SearchJob = () => {
  return (
    <div className="search-job" style={{ zIndex: 100 }}>
      <div className="search-header">
        <h1>INDIA’S #1 JOB PLATFORM</h1>
        <p>Your job search ends here</p>
        <p>Discover 50 lakh+ career opportunities</p>
        <p>Search jobs by 'company'</p>
        <p>Delhi-NCR</p>
      </div>
      <button className="search-button">Search jobs</button>

      {/* Testimonials */}
      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>testimony of Jafri Zain</p>
          <p>Jafri Zain has fixed an interview</p>
        </div>
        {/* Add more testimonials here */}
      </div>

      {/* Get job in 3 steps */}
      <div className="get-job">
        <h2>Get job in just 3 steps...</h2>
        <p>Build Apna Profile & get discovered by HRs</p>
        <p>Find jobs that match your profile</p>
        <p>Connect with people who can help</p>
      </div>

      {/* Popular Searches */}
      <div className="popular-searches">
        <h2>Popular Searches on Apna</h2>
        <ul>
          <li>TRENDING AT #1 - Jobs for Freshers</li>
          <li>TRENDING AT #2 - Work from home Jobs</li>
          <li>TRENDING AT #3 - Part time Jobs</li>
          <li>TRENDING AT #4 - Jobs for Women</li>
          <li>TRENDING AT #5 - International Jobs</li>
        </ul>
      </div>

      {/* User Reviews */}
      <div className="user-reviews">
        <h2>User Reviews</h2>
        <div className="user-review">
          <p>User review</p>
          <p>Rohith Kumar</p>
          <p>PLACED</p>
          <p>4.5</p>
          <p>
            "For digital marketing role, I was getting jobs in other cities but
            not in my hometown, Hyderabad. Using Apna app, I spoke to the HR
            directly and scheduled my interview that helped me in getting a job
            in my hometown"
          </p>
        </div>
        <div className="user-review">
          <p>User review</p>
          <p>Shiwangi Singla</p>
          <p>PLACED</p>
          <p>4.5</p>
          <p>
            "Thanks Apna for helping me find a job without much hassle. If you
            are a fresher or a skilled person with expert knowledge in a
            specific field, you can easily find a job through the Apna app."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchJob;
