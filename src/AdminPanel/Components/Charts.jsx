import React from "react";
import "../Css/Charts.css";
import PieCmp from "./PieCmp";
import LineBar1 from "./LineBar";
import AreaChart1 from "./AreaChart1";

const Charts = () => {
  return (
    <div id="layoutSidenav_content">
      <main>
        <div className="container-fluid px-4">
          <h1 className="chart-title">Charts</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Charts</li>
          </ol>
          <div className="card">
            <div className="card-body">
              Chart.js is a third party plugin that is used to generate the
              charts in this template. The charts below have been customized -
              for further customization options, please visit the official
              <a target="_blank" href="https://www.chartjs.org/docs/latest/">
                Chart.js documentation
              </a>
              .
            </div>
          </div>
          <div className="card">
            <div className="chart-header">
              <i className="fas fa-chart-area chart-title-icon" />
              Area Chart Example
              <AreaChart1 />
            </div>
            <div className="card-body chart-container">
              <canvas
                className="chart-canvas"
                id="myAreaChart"
                width="100%"
                height={30}
              />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="chart-header">
                  <i className="fas fa-chart-bar chart-title-icon" />
                  Line Bar Example
                  <LineBar1 />
                </div>
                <div className="card-body chart-container">
                  <canvas
                    className="chart-canvas"
                    id="myBarChart"
                    width="100%"
                    height={50}
                  />
                </div>
                <div className="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="chart-header">
                  <i className="fas fa-chart-pie chart-title-icon" />
                  Pie Chart Example
                  <PieCmp />
                </div>
                <div className="card-body chart-container">
                  <canvas
                    className="chart-canvas"
                    id="myPieChart"
                    width="100%"
                    height={50}
                  />
                </div>
                <div className="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">Copyright © Your Website 2023</div>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>·
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Charts;
