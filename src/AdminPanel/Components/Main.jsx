import React from "react";
import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";
import { Progress } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PieCmp from "././PieCmp";
import Tables from "./Tables";
import { Helmet } from "react-helmet";
import Data from "./Data";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Main = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <h1 className="page-title">Dashboard</h1>
        <button className="generate-report-button">Generate Report</button>
      </div>
      <div className="card-grid">
        <div className="card card-primary">
          <div>
            <h2 className="card-content">Primary Card</h2>
            <h1 className="card-link">View Details</h1>
          </div>
          <FaRegCalendarMinus className="card-icon" />
        </div>
        <div className="card card-warning">
          <div>
            <h2 className="card-content">Warning Card</h2>
            <h1 className="card-link">View Details</h1>
          </div>
          <FaRegCalendarMinus className="card-icon" />
        </div>
        <div className="card card-success">
          <div>
            <h2 className="card-content">Success Card</h2>
            <h1 className="card-link">View Details</h1>
          </div>
          <FaRegCalendarMinus className="card-icon" />
        </div>
        <div className="card card-danger">
          <div>
            <h2 className="card-content">Danger Card</h2>
            <h1 className="card-link">View Details</h1>
          </div>
          <FaRegCalendarMinus className="card-icon" />
        </div>
      </div>
      <div className="flex mt-22 w-full gap-30">
        <div className="chart-card">
          <div className="chart-card-header">
            <h2 className="chart-card-title">Earning Overview</h2>
            <FaEllipsisV color="gray" className="chart-card-icon" />
          </div>
          <div className="chart-container">
            <LineChart
              width={1150}
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
          <div className="chart-details">
            <p className="chart-link">View Details</p>
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-card-header">
            <h2 className="chart-card-title">Revenue Resources</h2>
            <FaEllipsisV color="gray" className="chart-card-icon" />
          </div>
          <div className="chart-container">
            <PieCmp />
          </div>
          <div className="chart-details">
            <p className="chart-link">View Details</p>
          </div>
        </div>
      </div>
      {/* Additional content */}
    </div>
  );
};

export default Main;
