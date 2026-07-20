import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const resultData = [
  {
    "student id": 1,
    name: "Alice",
    physics: 85,
    chemistry: 90,
    math: 88,
  },
  {
    "student id": 2,
    name: "Bob",
    physics: 78,
    chemistry: 82,
    math: 80,
  },
  {
    "student id": 3,
    name: "Charlie",
    physics: 92,
    chemistry: 89,
    math: 95,
  },
  {
    "student id": 4,
    name: "David",
    physics: 74,
    chemistry: 76,
    math: 79,
  },
  {
    "student id": 5,
    name: "Eva",
    physics: 88,
    chemistry: 91,
    math: 87,
  },
  {
    "student id": 6,
    name: "Frank",
    physics: 69,
    chemistry: 73,
    math: 71,
  },
  {
    "student id": 7,
    name: "Grace",
    physics: 95,
    chemistry: 94,
    math: 98,
  },
  {
    "student id": 8,
    name: "Henry",
    physics: 81,
    chemistry: 84,
    math: 83,
  },
  {
    "student id": 9,
    name: "Isabella",
    physics: 87,
    chemistry: 86,
    math: 90,
  },
  {
    "student id": 10,
    name: "Jack",
    physics: 76,
    chemistry: 79,
    math: 75,
  },
];

const ResultChart = () => {
  return (
  <LineChart width={600} height={300} data={resultData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="math" stroke="#8884d8" />
    <Line type="monotone" dataKey="chemistry" stroke="#666" />
  <Line type="monotone" dataKey="physics" stroke="red" />
</LineChart>
);

}

export default ResultChart;