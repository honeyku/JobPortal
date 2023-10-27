import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/css/AdminPannal.css";
import logo from "../components/Images/AIMHS.png";
import Sidebar from "./Components/Sidebar";
import Dashboardview from "./Components/Dashboardview";
import Tables from "./Components/Tables";
import { Outlet } from "react-router";
import "../App.css";
import "../index.css";

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

  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8001/api/visit-count")
      .then((res) => res.json())
      .then((data) => setVisitCount(data.count))
      .catch((error) => console.error(error));
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
        <div style={{ display: "flex" }}>
          <h2 style={{ width: "50%" }}>
            Number of visitors: <b>{visitCount}</b>
          </h2>

          <input
            type="text"
            placeholder="Search by position..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "50%", float: "left" }}
          />
        </div>

        <ul
          className="job-listings mb-5"
          style={{ marginTop: "50px", width: "100%" }}
        >
          {/* <li
            className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center"
            style={{ width: "100%", height: "50px", gap: "10px" }}
          >
            {" "}
            <div
              className="job-listing-position custom-width w-40 mb-3 mb-sm-0"
              style={{ width: "20%" }}
            >
              <h2>
                <strong> Customer Name</strong>
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
          </li> */}

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
                    href={`http://localhost:8001/api/download/${job.resumePath}`}
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
      {/* <div style={{ padding: "20px" }}>
        <h1>Sales Enquiries</h1>
        <ul>
          {sales.map((sale) => (
            <li
              key={sale.id}
              style={{ display: "flex", gap: "40px", fontSize: "17px" }}
            >
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
      </div> */}
      {/* 
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <div class="user-profile">
          <div class="user-image">
            <img src={logo} />
          </div>
          <div class="user-name">Edward Spencer</div>
          <div class="user-designation">Developer</div>
        </div>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">
              <i class="icon-box menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i class="icon-disc menu-icon"></i>
              <span class="menu-title">Properties</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/ui-features/buttons.html">
                    Agents
                  </a>
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/ui-features/typography.html">
                    Review
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/forms/basic_elements.html">
              <i class="icon-file menu-icon"></i>
              <span class="menu-title">Messages</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/charts/chartjs.html">
              <i class="icon-pie-graph menu-icon"></i>
              <span class="menu-title">My Profile</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/tables/basic-table.html">
              <i class="icon-command menu-icon"></i>
              <span class="menu-title">LogOut</span>
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#auth"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i class="icon-head menu-icon"></i>
              <span class="menu-title">User Pages</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="auth">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/samples/login.html">
                    {" "}
                    Login{" "}
                  </a>
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/samples/login-2.html">
                    {" "}
                    Login 2{" "}
                  </a>
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/samples/register.html">
                    {" "}
                    Register{" "}
                  </a>
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/samples/register-2.html">
                    {" "}
                    Register 2{" "}
                  </a>
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/samples/lock-screen.html">
                    {" "}
                    Lockscreen{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav> */}
      {/* <div>
        <div class="row mt-3">
          <div class="col-xl-3 flex-column d-flex grid-margin stretch-card">
            <div class="row flex-grow">
              <div class="col-sm-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Customers</h4>
                    <p>23% increase in conversion</p>
                    <h4 class="text-dark font-weight-bold mb-2">43,981</h4>
                    <canvas id="customers"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Orders</h4>
                    <p>6% decrease in earnings</p>
                    <h4 class="text-dark font-weight-bold mb-2">55,543</h4>
                    <canvas id="orders"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 d-flex grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Website Audience Metrics</h4>
                <div class="row">
                  <div class="col-lg-5">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      amet cumque cupiditate
                    </p>
                  </div>
                  <div class="col-lg-7">
                    <div
                      class="chart-legends d-lg-block d-none"
                      id="chart-legends"
                    ></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <canvas
                      id="web-audience-metrics-satacked"
                      class="mt-3"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex">
        {/* <div style={{ width: "12%", height: "100vh" }}></div> */}
        <div
          style={{
            // flex: 1,
            border: "1px solid #000",
            height: "120vh",
            // overflow: "scroll",
          }}
        >
          <Dashboardview />
          <Sidebar />
          {/* <div>
            <Outlet>
              <Tables />
            </Outlet>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default YourComponent;
