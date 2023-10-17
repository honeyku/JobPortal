import React, { useState } from "react";
import JobApplicationForm from "./JobApplicationform";

function JobDetails({ job }) {
  const [showForm, setShowForm] = useState(true);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const closeForm = () => {
    setShowForm(false);
  };

  const toggleApplyForm = () => {
    setShowApplyForm(!showApplyForm);
  };

  const CloseApplyform = () => {
    setShowApplyForm(false);
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <div>
      {showForm && (
        <section
          className="job-post-modal"
          style={{
            width: "80%",
            height: "100%", // Set the height to "100%" to match the content height
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            overflowY: "auto", // Allow vertical scrolling within the section
            padding: "20px",
            position: "fixed",
            top: "0",
            left: "10%",
          }}
        >
          <div className="container" style={{ marginTop: "60px" }}>
            <div className="row align-items-center mb-5">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <div className="d-flex align-items-center">
                  <div>
                    <h2>{job.position}</h2>
                    <div>
                      <span className="ml-0 mr-2 mb-2">
                        <span className="icon-briefcase mr-2"></span>
                        {job.company_name}
                      </span>
                      <span className="m-2">
                        <span className="icon-room mr-2">{job.location}</span>
                      </span>
                      <span className="m-2">
                        <span className="icon-clock-o mr-2">
                          {job.job_type}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <button onClick={closeForm}>X</button>
                <div className="row">
                  <div className="col-6">
                    <a
                      href="#"
                      className="btn btn-block btn-light btn-md"
                      style={{ color: "white" }}
                    >
                      <span className="icon-heart-o mr-2 text-danger"></span>
                      Save Job
                    </a>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn btn-block btn-primary btn-md"
                      onClick={toggleApplyForm}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="mb-5">
                  <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                    <span className="icon-align-left mr-3">
                      Job Description
                    </span>
                  </h3>
                  <b>Key Responsibilities:</b>
                  <ul>
                    {job.responsibilities &&
                      job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                  </ul>
                  <p>{job.description}</p>
                </div>
                <div className="mb-5">
                  <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                    <span className="icon-align-left mr-3">
                      Job Responsibilities
                    </span>
                  </h3>
                  <p>{job.job_responsibilities}</p>
                </div>
                <div className="mb-5">
                  <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                    <span className="icon-align-left mr-3">
                      Education + Experience
                    </span>
                  </h3>
                  <p>
                    {job.qualification} + {job.experience}
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                    <span className="icon-align-left mr-3">Salary</span>
                  </h3>
                  <p>{job.salary}</p>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-6">
                      <a
                        href="#"
                        className="btn btn-block btn-light btn-md"
                        style={{ color: "white" }}
                      >
                        <span className="icon-heart-o mr-2 text-danger"></span>
                        Save Job
                      </a>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-block btn-primary btn-md"
                        onClick={toggleApplyForm}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-light p-3 border rounded mb-4">
                  <h3 className="text-primary mt-3 h5 pl-3 mb-3">
                    Job Summary
                  </h3>
                  <ul className="list-unstyled pl-3 mb-0">
                    <li className="mb-2">
                      <strong className="text-black">Published on:</strong>{" "}
                      {formatDate(job.createdAt)}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {showApplyForm && <JobApplicationForm onClose={CloseApplyform} />}
    </div>
  );
}

export default JobDetails;
