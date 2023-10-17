import React, { useState, useEffect } from "react";
import axios from "axios";
import JobDetails from "./JobDetail";

function JobListing1() {
  const [jobData, setJobData] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  const [filters, setFilters] = useState({
    position: "",
    company: "",
    location: "",
    experience: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8001/jobpostdata")
      .then((response) => {
        setJobData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleJobClick = (job) => {
    setSelectedJobs((prevSelectedJobs) => {
      if (prevSelectedJobs.includes(job)) {
        return prevSelectedJobs.filter((selectedJob) => selectedJob !== job);
      } else {
        return [...prevSelectedJobs, job];
      }
    });
  };

  const clearFilters = () => {
    setFilters({
      position: "",
      company: "",
      location: "",
      experience: "",
    });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredJobs = jobData.filter((job) => {
    const positionMatch = job.position
      .toLowerCase()
      .includes(filters.position.toLowerCase());
    const companyMatch = job.company_name
      .toLowerCase()
      .includes(filters.company.toLowerCase());
    const locationMatch = job.location
      .toLowerCase()
      .includes(filters.location.toLowerCase());
    const experienceMatch = job.experience
      .toLowerCase()
      .includes(filters.experience.toLowerCase());

    return positionMatch && companyMatch && locationMatch && experienceMatch;
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredJobs.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <div className="container">
      <div className="row mb-5 justify-content-center">
        <div className="col-md-7 text-center">
          <h2 className="section-title mb-2">
            {filteredJobs.length} Job Listed
          </h2>
        </div>
      </div>

      <div
        className="filter-section"
        style={{
          display: "flex",
          gap: "4px",
          marginTop: "30px",
          marginBottom: "30px",
          fontSize: "17px",
          height: "40px",
        }}
      >
        <input
          type="text"
          name="position"
          value={filters.position}
          onChange={handleFilterChange}
          placeholder="Filter by Position"
        />
        <input
          type="text"
          name="company"
          value={filters.company}
          onChange={handleFilterChange}
          placeholder="Filter by Company"
        />
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Filter by Location"
        />
        <input
          type="text"
          name="experience"
          value={filters.experience}
          onChange={handleFilterChange}
          placeholder="Filter by Experience"
        />
        <button
          onClick={clearFilters}
          style={{ fontSize: "10px", color: "white", padding: "5px" }}
        >
          Clear Filters
        </button>
      </div>

      <ul className="job-listings mb-5">
        {currentJobs.map((job, index) => (
          <li
            key={index}
            className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center"
        
          >
            <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0 ">
              <h2>
                <strong>{job.company_name}</strong>
              </h2>
            </div>
            <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
              <h2>{job.position}</h2>
            </div>

            <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
              <span
                className="icon-room"
                style={{ fontWeight: "bold", fontSize: "15px" }}
              >
                {job.experience}
              </span>
            </div>
            <div className="job-listing-locationcustom-width w-50 mb-3 mb-sm-0">
              <span
                className="icon-room"
                style={{ fontWeight: "bold", fontSize: "15px" }}
              >
                {job.location}
              </span>
            </div>
            <div className="job-listing-meta">
              <button
                onClick={() => handleJobClick(job)}
                className={`badge badge-danger h-150 w-250 ${
                  selectedJobs.includes(job) ? "selected" : ""
                }`}
                style={{ background: "darkred" }}
              >
                {job.job_type}
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
                onClick={() => setCurrentPage(prevPage)}
                className="page-link"
              >
                Prev
              </button>
            </li>
          )}
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${number === currentPage ? "active" : ""}`}
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
                onClick={() => setCurrentPage(nextPage)}
                className="page-link"
              >
                Next
              </button>
            </li>
          )}
        </ul>
      </nav>

      {selectedJobs.map((job, index) => (
        <JobDetails key={index} job={job} />
      ))}
    </div>
  );
}

export default JobListing1;
