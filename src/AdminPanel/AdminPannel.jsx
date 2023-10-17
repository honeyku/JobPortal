import React, { useState, useEffect } from "react";
import axios from "axios";

function YourComponent() {
  const [jobs, setJobs] = useState([]);
  const [sales, setsales] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  useEffect(() => {
    // Make an API request to fetch job listings
    axios
      .get("http://localhost:8001/jobseekersdata")
      .then((response) => {
        setJobs(response.data); // Set the fetched data to the 'jobs' state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8001/getsalesenquiry")
      .then((response) => {
        setsales(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleJobClick = (job) => {};

  const filteredJobs = searchTerm
    ? jobs.filter((job) => {
        if (job.profile) {
          return job.profile.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
      })
    : jobs;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredJobs.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div style={{ padding: "20px", width: "100%" }}>
        {/* Add a search input to filter jobs */}
        <input
          type="text"
          placeholder="Search by position..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "50%", float: "right" }}
        />

        <ul
          className="job-listings mb-5"
          style={{ marginTop: "50px", width: "100%" }}
        >
          <li
            className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center"
            style={{ width: "100%", height: "50px", gap: "10px" }}
          >
            {" "}
            <div
              className="job-listing-position custom-width w-40 mb-3 mb-sm-0"
              style={{ width: "20%" }}
            >
              <h2>
                <strong>Name</strong>
              </h2>
            </div>
            <div
              className="job-listing-position custom-width w-40 mb-3 mb-sm-0"
              style={{ width: "20%" }}
            >
              <h2>
                <strong>Mobile Number</strong>
              </h2>
            </div>
            <div
              className="job-listing-position custom-width w-40 mb-3 mb-sm-0"
              style={{ width: "20%" }}
            >
              <h2>
                <strong>Email</strong>
              </h2>
            </div>
            <div
              className="job-listing-position custom-width w-40 mb-3 mb-sm-0"
              style={{ width: "20%" }}
            >
              <h2>
                <strong>Profile</strong>
              </h2>
            </div>
            <div
              className="job-listing-position custom-width w-40 mb-3 mb-sm-0"
              style={{ width: "20%" }}
            >
              <h2>
                <strong>Resume</strong>
              </h2>
            </div>
          </li>

          {currentJobs.map((job, index) => (
            <li
              key={index}
              className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center"
              style={{ width: "100%", height: "50px", gap: "10px" }}
            >
              <div
                className="job-listing-position custom-width w-40 mb-3 mb-sm-0"
                style={{ width: "20%" }}
              >
                <h2>
                  <strong>{job.name}</strong>
                </h2>
              </div>
              <div
                className="job-listing-position custom-width w-40 mb-3 mb-sm-0"
                style={{ width: "20%" }}
              >
                <h2>{job.mobile}</h2>
              </div>

              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  {job.email}
                </span>
              </div>
              <div
                className="job-listing-location custom-width w-30 mb-3 mb-sm-0"
                style={{ width: "30%" }}
              >
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  {job.profile}
                </span>
              </div>
              <div
                className="job-listing-location custom-width w-30 mb-3 mb-sm-0"
                style={{ width: "20%" }}
              >
                <button
                  onClick={() => handleJobClick(job)}
                  className={`badge badge-danger h-200 w-50 `}
                  style={{ background: "darkred", height: "20px" }}
                  styl
                >
                  <a
                    href={`http://localhost:8001/api/download/${job.resumePath}`} // Replace with the correct URL
                    target="_blank"
                    download
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    Download Resume
                  </a>
                </button>
              </div>
            </li>
          ))}
        </ul>

        <nav>
          <ul className="pagination center-pagination ">
            {currentPage !== 1 && (
              <li className="page-item">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="page-link"
                >
                  Prev
                </button>
              </li>
            )}
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  number === currentPage ? "active" : ""
                }`}
              >
                <button
                  onClick={() => setCurrentPage(number)}
                  className="page-link"
                >
                  {number}
                </button>
              </li>
            ))}
            {currentPage !== Math.ceil(filteredJobs.length / jobsPerPage) && (
              <li className="page-item">
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="page-link"
                >
                  Next
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div>
        <h1>Sales Enquiries</h1>
        <ul>
          {sales.map((sale) => (
            <li key={sale.id} style={{ display: "flex", gap: "40px" }}>
              <p>
                Name: {sale.first_name} {sale.last_name}
              </p>
              <p>Company Name: {sale.company_name}</p>
              <p>Company Size: {sale.company_size}</p>

              <p>Email: {sale.email}</p>
              <p>Phone Number: {sale.mobile}</p>
              <p>Enquiry:{sale.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default YourComponent;
