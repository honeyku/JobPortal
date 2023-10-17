import React from "react";

function Next() {
  return (
    <section
      className="py-5 overlay-primary fixed overlay"
      id="next"
      style={{ backgroundColor: "#9bdcfe" }}
    >
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2
              className="section-title mb-2 text-black italic"
              // style={{ fontFamily: "cursive" }}
            >
              All India Marketing HR Solutions Site Status
            </h2>
            <p className="lead text-black" style={{ fontSize: "20px" }}>
              All India Marketing HR Solutions is specialized in recruitment,
              staffing, and HR consulting, providing comprehensive talent
              acquisition and workforce solutions to businesses across India.
            </p>
          </div>
        </div>
        <div className="row pb-0 block__19738 section-counter">
          <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div className="d-block align-items-center justify-content-center mb-2 f">
              <strong
                className="number"
                data-number="2023"
                style={{ fontSize: "40px", color: "green" }}
              >
                2,023
              </strong>
            </div>
            <span className="caption">Candidates</span>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div className="d-block align-items-center justify-content-center mb-2">
              <strong
                className="number"
                data-number="54"
                style={{ fontSize: "40px", color: "green" }}
              >
                54
              </strong>
            </div>
            <span className="caption">Jobs Posted</span>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-10">
            <div className="d-block align-items-center justify-content-center mb-2">
              <strong
                className="number"
                data-number="120"
                style={{ fontSize: "40px", color: "green" }}
              >
                120
              </strong>
            </div>
            <span className="caption">Jobs Filled</span>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div className="d-block align-items-center justify-content-center mb-2">
              <strong
                className="number"
                data-number="550"
                style={{ fontSize: "40px", color: "green" }}
              >
                550
              </strong>
            </div>
            <span className="caption">Companies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Next;
