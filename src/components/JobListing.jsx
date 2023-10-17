import React from "react";
import { useState } from "react";
import JobDetails from "./JobDetail";

import Facebook from "./Images/fbicon.png";
import Linkdin from "./Images/linkdin.png";
import InstaGram from "./Images/insta.png";
import Twitter from "./Images/twiter.png";
import Pinterest from "./Images/pinterest.png";
import JobApplicationForm from "./JobApplicationform";

function JobListing() {
  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [showForm4, setShowForm4] = useState(false);
  const [showForm5, setShowForm5] = useState(false);
  const [showForm6, setShowForm6] = useState(false);
  const [showForm7, setShowForm7] = useState(false);
  const [showForm8, setShowForm8] = useState(false);

  const [applyform, setApplyform] = useState(false);
  const [applyform1, setApplyform1] = useState(false);
  const [applyform2, setApplyform2] = useState(false);
  const [applyform3, setApplyform3] = useState(false);
  const [applyform4, setApplyform4] = useState(false);
  const [applyform5, setApplyform5] = useState(false);
  const [applyform6, setApplyform6] = useState(false);
  const [applyform7, setApplyform7] = useState(false);
  const [applyform8, setApplyform8] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const toggleForm1 = () => {
    setShowForm1(!showForm1);
  };
  const toggleForm2 = () => {
    setShowForm2(!showForm2);
  };
  const toggleForm3 = () => {
    setShowForm3(!showForm3);
  };
  const toggleForm4 = () => {
    setShowForm4(!showForm4);
  };
  const toggleForm5 = () => {
    setShowForm5(!showForm5);
  };
  const toggleForm6 = () => {
    setShowForm6(!showForm6);
  };
  const toggleForm7 = () => {
    setShowForm7(!showForm7);
  };
  const toggleForm8 = () => {
    setShowForm8(!showForm8);
  };

  const toggleApplyForm = () => {
    setApplyform(!applyform);
  };
  const toggleApplyForm1 = () => {
    setApplyform1(!applyform1);
  };
  const toggleApplyForm2 = () => {
    setApplyform2(!applyform2);
  };

  const toggleApplyForm3 = () => {
    setApplyform3(!applyform3);
  };
  const toggleApplyForm4 = () => {
    setApplyform4(!applyform4);
  };
  const toggleApplyForm5 = () => {
    setApplyform5(!applyform5);
  };
  const toggleApplyForm6 = () => {
    setApplyform6(!applyform6);
  };
  const toggleApplyForm7 = () => {
    setApplyform7(!applyform7);
  };
  const toggleApplyForm8 = () => {
    setApplyform8(!applyform8);
  };
  const closeJobPostModal = () => {
    setApplyform(false);
    setApplyform1(false);
    setApplyform2(false);
    setApplyform3(false);
    setApplyform4(false);
    setApplyform5(false);
    setApplyform6(false);
    setApplyform7(false);
    setApplyform8(false);
  };

  const closeForm = () => {
    setShowForm(false);
    setShowForm1(false);
    setShowForm2(false);
    setShowForm3(false);
    setShowForm4(false);
    setShowForm5(false);
    setShowForm6(false);
    setShowForm7(false);
    setShowForm8(false);
  };
  return (
    <section className="site-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="section-title mb-2">43,167 Job Listed</h2>
          </div>
        </div>
        <ul className="job-listings mb-5">
          <br />
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <div className="job-listing-logo">
              <img
                style={{ height: "60px" }}
                src="https://instaciti.com/assets/img/logo.png"
                alt="Free Website Template by Free-Template.co"
                className="img-fluid"
              />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Sales Executive- Field</h2>
                <strong>InstaCiti</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  Fresher
                </span>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  Greater Noida
                </span>
              </div>
              <div className="job-listing-meta">
                <button
                  onClick={toggleForm}
                  className="badge badge-danger h-50 w-300"
                  style={{ background: "darkred" }}
                >
                  Full Time
                </button>
              </div>
              {showForm && (
                <section className="job-post-modal">
                  <div
                    className="container"
                    style={{
                      width: "80%",
                      height: "90%",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      maxHeight: "90%",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      overflowY: "auto",
                      padding: "20px",
                    }}
                  >
                    <div className="row align-items-center mb-5">
                      <div className="col-lg-8 mb-4 mb-lg-0">
                        <div className="d-flex align-items-center">
                          <div className="border p-2 d-inline-block mr-3 rounded">
                            <img
                              src="https://instaciti.com/assets/img/logo.png"
                              alt="Image"
                            />
                          </div>
                          <div>
                            <h2>Sales Executive- Field</h2>
                            <div>
                              <span className="ml-0 mr-2 mb-2">
                                <span className="icon-briefcase mr-2"></span>
                                InstaCiti
                              </span>
                              <span className="m-2">
                                <span className="icon-room mr-2">
                                  Greater Noida
                                </span>
                              </span>
                              <span className="m-2">
                                <span className="icon-clock-o mr-2"></span>
                                <span className="text-primary">Full Time</span>
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
                            {/* <a
                              href="#"
                              className="btn btn-block btn-primary btn-md"
                              onClick={toggleApplyForm}
                            >
                              Apply Now
                            </a> */}
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
                          <figure className="mb-5">
                            <img
                              src="images/job_single_img_1.jpg"
                              alt="Image"
                              className="img-fluid rounded"
                            />
                          </figure>
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Description
                            </span>
                          </h3>
                          <b>Key Responsibilities:</b> <br />
                          <div>
                            <ul>
                              <li>
                                Identify potential customers and generate leads
                                through various methods such as cold calling,
                                networking, attending industry events, and
                                utilizing resources.
                              </li>{" "}
                              <li>
                                Build and maintain strong relationships with
                                existing and potential customers. Understand
                                their requirements, address any concerns or
                                queries, and present suitable solutions to meet
                                their needs.
                              </li>{" "}
                              <li>
                                Demonstrate a deep understanding of our products
                                or services and effectively communicate their
                                features, advantages, and benefits to potential
                                customers. Conduct product presentations and
                                demonstrations as needed.
                              </li>{" "}
                              <li>
                                Maintain accurate records of sales activities,
                                customer interactions, and prospects in the
                                system.{" "}
                              </li>
                              <li>
                                {" "}
                                Stay updated on industry trends, market
                                conditions, and competitor activities. Gather
                                and analyze relevant market information to
                                identify potential areas for business growth.
                              </li>
                            </ul>
                          </div>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Responsibilities
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>
                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Education + Experience
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Other Benifits
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>
                        <div className="col-lg-4">
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
                              <a
                                href="#"
                                className="btn btn-block btn-primary btn-md"
                                onClick={toggleApplyForm}
                              >
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="bg-light p-3 border rounded mb-4">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Job Summary
                          </h3>
                          <ul className="list-unstyled pl-3 mb-0">
                            <li className="mb-2">
                              <strong className="text-black">
                                Published on:
                              </strong>{" "}
                              April 14, 2019
                            </li>
                          </ul>
                        </div>
                        <div className="bg-light p-3 border rounded">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Share
                          </h3>
                          <div
                            className="flex items-center"
                            style={{ width: "100%" }}
                          >
                            <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                              <span class="icon-whatsapp">
                                <img
                                  src="http://www.pngall.com/wp-content/uploads/2016/04/WhatsApp-Transparent.png"
                                  alt="WhatsApp"
                                  style={{
                                    height: "4%",
                                    width: "4%",
                                    marginLeft: "2em",
                                  }}
                                />
                              </span>
                            </a>
                            <div className="px-3">
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-facebook">
                                  <img
                                    src={Facebook}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-linkdin">
                                  <img
                                    src={Linkdin}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-twitter">
                                  <img
                                    src={Twitter}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-pinterest">
                                  <img
                                    src={Pinterest}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {applyform && (
                <div className="">
                  <JobApplicationForm onClose={closeJobPostModal} />
                </div>
              )}
            </div>
          </li>
          <br />
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <div className="job-listing-logo">
              <img
                style={{ height: "60px" }}
                src="https://www.slkbima.com/images/logo.png"
                alt="Free Website Template by Free-Template.co"
                className="img-fluid"
              />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Telesales Executive</h2>
                <strong>SLK Bima Brokers Pvt Ltd</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  Fresher
                </span>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  Delhi
                </span>
              </div>
              <div className="job-listing-meta">
                <button
                  onClick={toggleForm1}
                  className="badge badge-danger h-50 w-300"
                  style={{ background: "darkred" }}
                >
                  Full Time
                </button>
              </div>
              {showForm1 && (
                <section className="job-post-modal">
                  <div
                    className="container"
                    style={{
                      width: "80%",
                      height: "90%",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      maxHeight: "90%",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      overflowY: "auto",
                      padding: "20px",
                    }}
                  >
                    <div className="row align-items-center mb-5">
                      <div className="col-lg-8 mb-4 mb-lg-0">
                        <div className="d-flex align-items-center">
                          <div className="border p-2 d-inline-block mr-3 rounded">
                            <img src="images/job_logo_5.jpg" alt="Image" />
                          </div>
                          <div>
                            <h2>Designer</h2>
                            <div>
                              <span className="ml-0 mr-2 mb-2">
                                <span className="icon-briefcase mr-2"></span>
                                Puma
                              </span>
                              <span className="m-2">
                                <span className="icon-room mr-2"></span>New York
                                City
                              </span>
                              <span className="m-2">
                                <span className="icon-clock-o mr-2"></span>
                                <span className="text-primary">Full Time</span>
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
                            <a
                              href="#"
                              className="btn btn-block btn-primary btn-md"
                              onClick={toggleApplyForm}
                            >
                              Apply Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="mb-5">
                          <figure className="mb-5">
                            <img
                              src="images/job_single_img_1.jpg"
                              alt="Image"
                              className="img-fluid rounded"
                            />
                          </figure>
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Description
                            </span>
                          </h3>
                       
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Responsibilities
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                          </p>
                        </div>
                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Education + Experience
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Other Benifits
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                          </p>
                        </div>
                        <div className="col-lg-4">
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
                              <a
                                href="#"
                                className="btn btn-block btn-primary btn-md"
                                onClick={toggleApplyForm}
                              >
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="bg-light p-3 border rounded mb-4">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Job Summary
                          </h3>
                          <ul className="list-unstyled pl-3 mb-0">
                            <li className="mb-2">
                              <strong className="text-black">
                                Published on:
                              </strong>{" "}
                              April 14, 2019
                            </li>
                          </ul>
                        </div>
                        <div className="bg-light p-3 border rounded">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Share
                          </h3>
                          <div
                            className="flex items-center"
                            style={{ width: "100%" }}
                          >
                            <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                              <span class="icon-whatsapp">
                                <img
                                  src="http://www.pngall.com/wp-content/uploads/2016/04/WhatsApp-Transparent.png"
                                  alt="WhatsApp"
                                  style={{
                                    height: "4%",
                                    width: "4%",
                                    marginLeft: "2em",
                                  }}
                                />
                              </span>
                            </a>
                            <div className="px-3">
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-facebook">
                                  <img
                                    src={Facebook}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-linkdin">
                                  <img
                                    src={Linkdin}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-twitter">
                                  <img
                                    src={Twitter}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-pinterest">
                                  <img
                                    src={Pinterest}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {applyform1 && (
                <div className="">
                  <JobApplicationForm onClose={closeJobPostModal} />
                </div>
              )}
            </div>
          </li>
          <br />
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <div className="job-listing-logo">
              <img
                src="https://www.evanik.com/wp-content/themes/evanik/img/evanik-logo.png"
                alt="Free Website Template by Free-Template.co"
                className="img-fluid"
                style={{ height: "80px" }}
              />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Customer Care Executive</h2>
                <strong>Evanik networks Pvt Ltd</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  1 - 3+ years
                </span>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  New Delhi
                </span>
              </div>
              <div className="job-listing-meta">
                <button
                  onClick={toggleForm2}
                  className="badge badge-danger h-50 w-300"
                  style={{ background: "darkred" }}
                >
                  Full Time
                </button>
              </div>
              {showForm2 && (
                <section className="job-post-modal">
                  <div
                    className="container"
                    style={{
                      width: "80%",
                      height: "90%",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      maxHeight: "90%",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      overflowY: "auto",
                      padding: "20px",
                    }}
                  >
                    <div className="row align-items-center mb-5">
                      <div className="col-lg-8 mb-4 mb-lg-0">
                        <div className="d-flex align-items-center">
                          <div className="border p-2 d-inline-block mr-3 rounded">
                            <img src="images/job_logo_5.jpg" alt="Image" />
                          </div>
                          <div>
                            <h2>Product Designer</h2>
                            <div>
                              <span className="ml-0 mr-2 mb-2">
                                <span className="icon-briefcase mr-2"></span>
                                SLK Bima Brokers Pvt Ltd
                              </span>
                              <span className="m-2">
                                <span className="icon-room mr-2"></span>New York
                                City
                              </span>
                              <span className="m-2">
                                <span className="icon-clock-o mr-2"></span>
                                <span className="text-primary">Full Time</span>
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
                            <a
                              href="#"
                              className="btn btn-block btn-primary btn-md"
                              onClick={toggleApplyForm2}
                            >
                              Apply Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="mb-5">
                          <figure className="mb-5">
                            <img
                              src="images/job_single_img_1.jpg"
                              alt="Image"
                              className="img-fluid rounded"
                            />
                          </figure>
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Description
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Responsibilities
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>
                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Education + Experience
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Other Benifits
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>
                        <div className="col-lg-4">
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
                              <a
                                href="#"
                                className="btn btn-block btn-primary btn-md"
                                onClick={toggleApplyForm2}
                              >
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="bg-light p-3 border rounded mb-4">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Job Summary
                          </h3>
                          <ul className="list-unstyled pl-3 mb-0">
                            <li className="mb-2">
                              <strong className="text-black">
                                Published on:
                              </strong>{" "}
                              April 14, 2019
                            </li>
                          </ul>
                        </div>
                        <div className="bg-light p-3 border rounded">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Share
                          </h3>
                          <div
                            className="flex items-center"
                            style={{ width: "100%" }}
                          >
                            <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                              <span class="icon-whatsapp">
                                <img
                                  src="http://www.pngall.com/wp-content/uploads/2016/04/WhatsApp-Transparent.png"
                                  alt="WhatsApp"
                                  style={{
                                    height: "4%",
                                    width: "4%",
                                    marginLeft: "2em",
                                  }}
                                />
                              </span>
                            </a>
                            <div className="px-3">
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-facebook">
                                  <img
                                    src={Facebook}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-linkdin">
                                  <img
                                    src={Linkdin}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-twitter">
                                  <img
                                    src={Twitter}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-pinterest">
                                  <img
                                    src={Pinterest}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {applyform2 && (
                <div className="">
                  <JobApplicationForm onClose={closeJobPostModal} />
                </div>
              )}
            </div>
          </li>
          <br />
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <div className="job-listing-logo">
              <img
                style={{ height: "60px", width: "250px" }}
                src="https://www.dagarbrothers.com/images/logo.png"
                alt="Free Website Template by Free-Template.co"
                className="img-fluid"
              />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Sales Coordinator</h2>
                <strong>D.B.Informatics Pvt. Ltd.</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  Fresher
                </span>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  Faridabad
                </span>
              </div>
              <div className="job-listing-meta">
                <button
                  onClick={toggleForm3}
                  className="badge badge-danger h-50 w-300"
                  style={{ background: "darkred" }}
                >
                  Full Time
                </button>
              </div>
              {showForm3 && (
                <section className="job-post-modal">
                  <div
                    className="container"
                    style={{
                      width: "80%",
                      height: "90%",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      maxHeight: "90%",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      overflowY: "auto",
                      padding: "20px",
                    }}
                  >
                    <div className="row align-items-center mb-5">
                      <div className="col-lg-8 mb-4 mb-lg-0">
                        <div className="d-flex align-items-center">
                          <div className="border p-2 d-inline-block mr-3 rounded">
                            <img src="images/job_logo_5.jpg" alt="Image" />
                          </div>
                          <div>
                            <h2>Product Designer</h2>
                            <div>
                              <span className="ml-0 mr-2 mb-2">
                                <span className="icon-briefcase mr-2"></span>
                                Puma
                              </span>
                              <span className="m-2">
                                <span className="icon-room mr-2"></span>New York
                                City
                              </span>
                              <span className="m-2">
                                <span className="icon-clock-o mr-2"></span>
                                <span className="text-primary">Full Time</span>
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
                            <a
                              href="#"
                              className="btn btn-block btn-primary btn-md"
                              onClick={toggleApplyForm3}
                            >
                              Apply Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="mb-5">
                          <figure className="mb-5">
                            <img
                              src="images/job_single_img_1.jpg"
                              alt="Image"
                              className="img-fluid rounded"
                            />
                          </figure>
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Description
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Responsibilities
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>
                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Education + Experience
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Other Benifits
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>
                        <div className="col-lg-4">
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
                              <a
                                href="#"
                                className="btn btn-block btn-primary btn-md"
                                onClick={toggleApplyForm3}
                              >
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="bg-light p-3 border rounded mb-4">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Job Summary
                          </h3>
                          <ul className="list-unstyled pl-3 mb-0">
                            <li className="mb-2">
                              <strong className="text-black">
                                Published on:
                              </strong>{" "}
                              April 14, 2019
                            </li>
                          </ul>
                        </div>
                        <div className="bg-light p-3 border rounded">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Share
                          </h3>
                          <div
                            className="flex items-center"
                            style={{ width: "100%" }}
                          >
                            <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                              <span class="icon-whatsapp">
                                <img
                                  src="http://www.pngall.com/wp-content/uploads/2016/04/WhatsApp-Transparent.png"
                                  alt="WhatsApp"
                                  style={{
                                    height: "4%",
                                    width: "4%",
                                    marginLeft: "2em",
                                  }}
                                />
                              </span>
                            </a>
                            <div className="px-3">
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-facebook">
                                  <img
                                    src={Facebook}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-linkdin">
                                  <img
                                    src={Linkdin}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-twitter">
                                  <img
                                    src={Twitter}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-pinterest">
                                  <img
                                    src={Pinterest}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {applyform3 && (
                <div className="">
                  <JobApplicationForm onClose={closeJobPostModal} />
                </div>
              )}
            </div>
          </li>
          <br />
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <div className="job-listing-logo">
              <img
                style={{ height: "60px", width: "250px" }}
                src="https://www.dagarbrothers.com/images/logo.png"
                alt="Free Website Template by Free-Template.co"
                className="img-fluid"
              />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Accountant</h2>
                <strong>D.B.Informatics Pvt. Ltd.</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  Fresher
                </span>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  Faridabad
                </span>
              </div>
              <div className="job-listing-meta">
                <button
                  onClick={toggleForm4}
                  className="badge badge-danger h-50 w-300"
                  style={{ background: "darkred" }}
                >
                  Full Time
                </button>
              </div>
              {showForm4 && (
                <section className="job-post-modal">
                  <div
                    className="container"
                    style={{
                      width: "80%",
                      height: "90%",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      maxHeight: "90%",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      overflowY: "auto",
                      padding: "20px",
                    }}
                  >
                    <div className="row align-items-center mb-5">
                      <div className="col-lg-8 mb-4 mb-lg-0">
                        <div className="d-flex align-items-center">
                          <div className="border p-2 d-inline-block mr-3 rounded">
                            <img src="images/job_logo_5.jpg" alt="Image" />
                          </div>
                          <div>
                            <h2>Product Designer</h2>
                            <div>
                              <span className="ml-0 mr-2 mb-2">
                                <span className="icon-briefcase mr-2"></span>
                                Puma
                              </span>
                              <span className="m-2">
                                <span className="icon-room mr-2"></span>New York
                                City
                              </span>
                              <span className="m-2">
                                <span className="icon-clock-o mr-2"></span>
                                <span className="text-primary">Full Time</span>
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
                            <a
                              href="#"
                              className="btn btn-block btn-primary btn-md"
                              onClick={toggleApplyForm4}
                            >
                              Apply Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="mb-5">
                          <figure className="mb-5">
                            <img
                              src="images/job_single_img_1.jpg"
                              alt="Image"
                              className="img-fluid rounded"
                            />
                          </figure>
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Description
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Responsibilities
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>
                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Education + Experience
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Other Benifits
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>
                        <div className="col-lg-4">
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
                              <a
                                href="#"
                                className="btn btn-block btn-primary btn-md"
                                onClick={toggleApplyForm4}
                              >
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="bg-light p-3 border rounded mb-4">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Job Summary
                          </h3>
                          <ul className="list-unstyled pl-3 mb-0">
                            <li className="mb-2">
                              <strong className="text-black">
                                Published on:
                              </strong>{" "}
                              April 14, 2019
                            </li>
                          </ul>
                        </div>
                        <div className="bg-light p-3 border rounded">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Share
                          </h3>
                          <div
                            className="flex items-center"
                            style={{ width: "100%" }}
                          >
                            <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                              <span class="icon-whatsapp">
                                <img
                                  src="http://www.pngall.com/wp-content/uploads/2016/04/WhatsApp-Transparent.png"
                                  alt="WhatsApp"
                                  style={{
                                    height: "4%",
                                    width: "4%",
                                    marginLeft: "2em",
                                  }}
                                />
                              </span>
                            </a>
                            <div className="px-3">
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-facebook">
                                  <img
                                    src={Facebook}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-linkdin">
                                  <img
                                    src={Linkdin}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-twitter">
                                  <img
                                    src={Twitter}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-pinterest">
                                  <img
                                    src={Pinterest}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {applyform4 && (
                <div className="">
                  <JobApplicationForm onClose={closeJobPostModal} />
                </div>
              )}
            </div>
          </li>
          <br />
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <a href="job-single.php"></a>
            <div className="job-listing-logo">
              <img
                src="https://www.xpertdyechem.com/wp-content/uploads/2023/05/Untitled-1-removebg-preview.png"
                alt="Free Website Template by Free-Template.co"
                className="img-fluid"
                style={{ height: "60px", width: "250px" }}
              />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Telecaller</h2>
                <strong>XPERT DYE CHEM PVT. LTD.</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  2+ year
                </span>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  Noida
                </span>
              </div>
              <div className="job-listing-meta">
                <button
                  onClick={toggleForm4}
                  className="badge badge-danger h-50 w-300"
                  style={{ background: "darkred" }}
                >
                  Full Time
                </button>
              </div>
              {showForm5 && (
                <section className="job-post-modal">
                  <div
                    className="container"
                    style={{
                      width: "80%",
                      height: "90%",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      maxHeight: "90%",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      overflowY: "auto",
                      padding: "20px",
                    }}
                  >
                    <div className="row align-items-center mb-5">
                      <div className="col-lg-8 mb-4 mb-lg-0">
                        <div className="d-flex align-items-center">
                          <div className="border p-2 d-inline-block mr-3 rounded">
                            <img src="images/job_logo_5.jpg" alt="Image" />
                          </div>
                          <div>
                            <h2>Designer</h2>
                            <div>
                              <span className="ml-0 mr-2 mb-2">
                                <span className="icon-briefcase mr-2"></span>
                                Puma
                              </span>
                              <span className="m-2">
                                <span className="icon-room mr-2"></span>New York
                                City
                              </span>
                              <span className="m-2">
                                <span className="icon-clock-o mr-2"></span>
                                <span className="text-primary">Full Time</span>
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
                            <a
                              href="#"
                              className="btn btn-block btn-primary btn-md"
                              onClick={toggleApplyForm5}
                            >
                              Apply Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="mb-5">
                          <figure className="mb-5">
                            <img
                              src="images/job_single_img_1.jpg"
                              alt="Image"
                              className="img-fluid rounded"
                            />
                          </figure>
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Description
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Responsibilities
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>
                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Education + Experience
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Other Benifits
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>
                        <div className="col-lg-4">
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
                              <a
                                href="#"
                                className="btn btn-block btn-primary btn-md"
                                onClick={toggleApplyForm5}
                              >
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="bg-light p-3 border rounded mb-4">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Job Summary
                          </h3>
                          <ul className="list-unstyled pl-3 mb-0">
                            <li className="mb-2">
                              <strong className="text-black">
                                Published on:
                              </strong>{" "}
                              April 14, 2019
                            </li>
                          </ul>
                        </div>
                        <div className="bg-light p-3 border rounded">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Share
                          </h3>
                          <div
                            className="flex items-center"
                            style={{ width: "100%" }}
                          >
                            <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                              <span class="icon-whatsapp">
                                <img
                                  src="http://www.pngall.com/wp-content/uploads/2016/04/WhatsApp-Transparent.png"
                                  alt="WhatsApp"
                                  style={{
                                    height: "4%",
                                    width: "4%",
                                    marginLeft: "2em",
                                  }}
                                />
                              </span>
                            </a>
                            <div className="px-3">
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-facebook">
                                  <img
                                    src={Facebook}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-linkdin">
                                  <img
                                    src={Linkdin}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-twitter">
                                  <img
                                    src={Twitter}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-pinterest">
                                  <img
                                    src={Pinterest}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {applyform5 && (
                <div className="">
                  <JobApplicationForm onClose={closeJobPostModal} />
                </div>
              )}
            </div>
          </li>
          <br />
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <div className="job-listing-logo">
              <img
                src="https://www.apexsystems.com/profiles/apex/themes/apex_bootstrap/images/Apex_logo_horizontal_white.png"
                alt="Free Website Template by Free-Template.co"
                className="img-fluid"
                style={{ backgroundColor: "black", height: "60px" }}
              />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Sales Executive</h2>
                <strong> Apex System. Net</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  5- 7 Year
                </span>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span
                  className="icon-room"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  New Delhi
                </span>
              </div>
              <div className="job-listing-meta">
                <button
                  onClick={toggleForm5}
                  className="badge badge-danger h-50 w-300"
                  style={{ background: "darkred" }}
                >
                  Full Time
                </button>
              </div>
              {showForm6 && (
                <section className="job-post-modal">
                  <div
                    className="container"
                    style={{
                      width: "80%",
                      height: "90%",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      maxHeight: "90%",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      overflowY: "auto",
                      padding: "20px",
                    }}
                  >
                    <div className="row align-items-center mb-5">
                      <div className="col-lg-8 mb-4 mb-lg-0">
                        <div className="d-flex align-items-center">
                          <div className="border p-2 d-inline-block mr-3 rounded">
                            <img src="images/job_logo_5.jpg" alt="Image" />
                          </div>
                          <div>
                            <h2>Designer</h2>
                            <div>
                              <span className="ml-0 mr-2 mb-2">
                                <span className="icon-briefcase mr-2"></span>
                                Puma
                              </span>
                              <span className="m-2">
                                <span className="icon-room mr-2"></span>New York
                                City
                              </span>
                              <span className="m-2">
                                <span className="icon-clock-o mr-2"></span>
                                <span className="text-primary">Full Time</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="col-2">
                          <a
                            href="#"
                            className="btn btn-block btn-light btn-md"
                            style={{ color: "white", float: "right" }}
                          >
                            <span className="icon-heart-o mr-2 text-danger">
                              X
                            </span>
                          </a>
                        </div>
                        <div className="row">
                          <button onClick={closeForm}>X</button>
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
                            <a
                              href="#"
                              className="btn btn-block btn-primary btn-md"
                              onClick={toggleApplyForm6}
                            >
                              Apply Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="mb-5">
                          <figure className="mb-5">
                            <img
                              src="images/job_single_img_1.jpg"
                              alt="Image"
                              className="img-fluid rounded"
                            />
                          </figure>
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Description
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Job Responsibilities
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>
                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Education + Experience
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>

                        <div className="mb-5">
                          <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                            <span className="icon-align-left mr-3">
                              Other Benifits
                            </span>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Debitis illum fuga eveniet. Deleniti
                            asperiores, commodi quae ipsum quas est itaque,
                            ipsa, dolore beatae voluptates nemo blanditiis iste
                            eius officia minus.
                          </p>
                          <p>
                            Velit unde aliquam et voluptas reiciendis non
                            sapiente labore, deleniti asperiores blanditiis
                            nihil quia officiis dolor vero iste dolore vel
                            molestiae saepe. Id nisi, consequuntur sunt impedit
                            quidem, vitae mollitia!
                          </p>
                        </div>
                        <div className="col-lg-4">
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
                              <a
                                href="#"
                                className="btn btn-block btn-primary btn-md"
                                onClick={toggleApplyForm6}
                              >
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="bg-light p-3 border rounded mb-4">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Job Summary
                          </h3>
                          <ul className="list-unstyled pl-3 mb-0">
                            <li className="mb-2">
                              <strong className="text-black">
                                Published on:
                              </strong>{" "}
                              April 14, 2019
                            </li>
                          </ul>
                        </div>
                        <div className="bg-light p-3 border rounded">
                          <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                            Share
                          </h3>
                          <div
                            className="flex items-center"
                            style={{ width: "100%" }}
                          >
                            <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                              <span class="icon-whatsapp">
                                <img
                                  src="http://www.pngall.com/wp-content/uploads/2016/04/WhatsApp-Transparent.png"
                                  alt="WhatsApp"
                                  style={{
                                    height: "4%",
                                    width: "4%",
                                    marginLeft: "2em",
                                  }}
                                />
                              </span>
                            </a>
                            <div className="px-3">
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-facebook">
                                  <img
                                    src={Facebook}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-linkdin">
                                  <img
                                    src={Linkdin}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-twitter">
                                  <img
                                    src={Twitter}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                              <a href="#" class="pt-3 pb-3 pr-3 pl-0">
                                <span class="icon-pinterest">
                                  <img
                                    src={Pinterest}
                                    alt=""
                                    style={{
                                      height: "4%",
                                      width: "4%",
                                      marginLeft: "2em",
                                    }}
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {applyform6 && (
                <div className="">
                  <JobApplicationForm onClose={closeJobPostModal} />
                </div>
              )}
            </div>
          </li>
          {/* Add the rest of the list items here */}
        </ul>
        <div className="row pagination-wrap">
          <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
            <span>Showing 1-7 Of 43,167 Jobs</span>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <div className="custom-pagination ml-auto">
              <a href="#" className="prev">
                Prev
              </a>
              <div className="d-inline-block">
                <a href="#" className="active">
                  {" "}
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
              </div>
              <a href="#" className="next">
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobListing;
