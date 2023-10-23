import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "..Css/PieCmp.css";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieCmp = () => {
  return (
    <div className="pie-chart-container">
      <PieChart className="pie-chart" width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="legend-labels">
        {data.map((item, index) => (
          <p key={index} className="legend-label">
            {item.name}
          </p>
        ))}
      </div>
      <div className="legend-colors">
        {COLORS.map((item, index) => (
          <div
            className="legend-color"
            style={{ backgroundColor: item }}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PieCmp;
