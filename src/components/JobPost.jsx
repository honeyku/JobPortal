import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../components/css/JobPost.css";
import axios from "axios";
import { useHistoryState } from "@uidotdev/usehooks";
import { useAuth } from "./Authentication/AuthContext";

const JobPost = ({ onClose }) => {
  const history = useHistoryState();
  const [successMessage, setSuccessMessage] = useState(null);
  const { user } = useAuth();

  const [jobDetails, setJobDetails] = useState({
    position: "",
    location: "",
    experience: "",
    preference: "",
    job_type: "",
    qualification: "",
    description: "",
    company_name: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSaveJob = () => {
    const jobData = {
      position: jobDetails.position,
      location: jobDetails.location,
      experience: jobDetails.experience,
      preference: jobDetails.preference,
      job_type: jobDetails.job_type,
      qualification: jobDetails.qualification,
      description: jobDetails.description,
      company_name: jobDetails.company_name,
      salary: jobDetails.salary,
    };

    axios
      .post("http://localhost:8001/jobpost", jobData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then((response) => {
        console.log("API Response:", response.data);
        if (response.status === 201) {
          // window.location.href = "/";
          setSuccessMessage("Job posted successfully!");
          setJobDetails({
            position: "",
            location: "",
            experience: "",
            preference: "",
            job_type: "",
            qualification: "",
            description: "",
            company_name: "",
            salary: "",
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        }
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };
  if (!user) {
    return (
      <div style={{ marginTop: "20px", color: "red", fontSize: "17px" }}>
        You must be logged in to post a job.
      </div>
    );
  }
  return (
    <div className="job-post-modal">
      <div className="job-post-content" style={{ backgroundColor: "#f3fef7" }}>
        {" "}
        <button
          className="close-button"
          onClick={onClose}
          style={{
            float: "right",
            marginTop: "-18px",
          }}
        >
          X
        </button>
        <br />
        <h1>Job Details</h1>
        <hr />
        <label>Job Title:</label>
        <input
          type="text"
          name="position"
          onChange={handleChange}
          value={jobDetails.position}
        />
        <label>Location:</label>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          value={jobDetails.location}
        />
        <label>Experience:</label>
        <input
          type="text"
          name="experience"
          onChange={handleChange}
          value={jobDetails.experience}
        />
        <label>Preference:</label>
        <input
          type="text"
          name="preference"
          onChange={handleChange}
          value={jobDetails.preference}
        />
        <label>Job Type:</label>
        <input
          type="text"
          name="job_type"
          onChange={handleChange}
          value={jobDetails.job_type}
        />
        <label>Qualification:</label>
        <input
          type="text"
          name="qualification"
          onChange={handleChange}
          value={jobDetails.qualification}
        />
        <label>Job Description:</label>
        <textarea
          name="description"
          onChange={handleChange}
          value={jobDetails.description}
        ></textarea>
        <br />
        <br />
        <h1>Company Details</h1>
        <hr />
        <label>Company Name:</label>
        <input
          type="text"
          name="company_name"
          onChange={handleChange}
          value={jobDetails.company_name}
        />
        <label>Salary:</label>
        <input
          type="text"
          name="salary"
          onChange={handleChange}
          value={jobDetails.salary}
        />
        <br />
        <br />
        <button onClick={handleSaveJob}>Save Job</button>
        {successMessage && (
          <div
            className="success-message"
            style={{ color: "blue", fontSize: "18px" }}
          >
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPost;
