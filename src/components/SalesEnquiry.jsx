import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useHistoryState } from "@uidotdev/usehooks";
// import Home from "./home";

function SalesEnquiry() {
  const [salesEnquiry, setSalesEnquiry] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    company: "",
    companySize: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && !/^\d{0,10}$/.test(value)) {
      return;
    }
    setSalesEnquiry({ ...salesEnquiry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobData = {
      first_name: salesEnquiry.first_name,
      last_name: salesEnquiry.last_name,
      email: salesEnquiry.email,
      mobile: salesEnquiry.mobile,
      company_name: salesEnquiry.company,
      company_size: salesEnquiry.companySize,
      message: salesEnquiry.about,
    };

    axios
      .post("http://localhost:8001/salesenquiry", jobData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("API Response:", response.data);
        if (response.status === 201) {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <section
      className="salesEnquiry"
      id="salesEnquiry"
      style={{ width: "100%", background: "rgb(48, 31, 51)" }}
    >
      <div className="contact-section">
        <h2 className="section-title">Sales Enquiry</h2>
        <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
          <div className="inputt">
            <div className="input-group">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                value={salesEnquiry.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                value={salesEnquiry.last_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="inputt">
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={salesEnquiry.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                required
                pattern="[0-9]{10}"
                value={salesEnquiry.mobile}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="inputt">
            <div className="input-group">
              <input
                type="text"
                name="company"
                placeholder="Company"
                required
                value={salesEnquiry.company}
                onChange={handleChange}
              />
            </div>
            <div className="input-group" style={{ color: "black" }}>
              <select
                className="select"
                name="companySize"
                required
                value={salesEnquiry.companySize}
                onChange={handleChange}
              >
                <option value="">Company Size</option>
                <option value="1-20">1-20</option>
                <option value="21-50">21-50</option>
                <option value="51-100">51-100</option>
                <option value="101-500">101-500</option>
                <option value="501-1000">501-1000</option>
                <option value="1001+">1001+</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <textarea
              style={{ color: "black", fontSize: "17px" }}
              name="about"
              cols="30"
              rows="5"
              placeholder="Tell us how we can help you..."
              value={salesEnquiry.about}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-button"
            style={{ width: "100%" }}
          >
            Submit
          </button>
        </form>
        <br />
        <div
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "white",
          }}
          className="details"
        >
          <p>1 Lack+ Candidates</p>
          <p>70+ Cities</p>
          <p>1 Lakh+ Jobs</p>
        </div>
      </div>
    </section>
  );
}

export default SalesEnquiry;
