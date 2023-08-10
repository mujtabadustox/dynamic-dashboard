"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
} from "chart.js";
import { Pie, Doughnut, Line, Bar } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement
);
const Widget = ({ element }) => {
  console.log("uuu", element);

  if (element.type === "pie") {
    console.log("pp:", element);
    return (
      <>
        <Pie data={element.data} />
      </>
    );
  } else if (element.type === "doughnut") {
    console.log("dd:", element);
    return (
      <>
        <Doughnut data={element.data} />
      </>
    );
  } else if (element.type === "numeric") {
    console.log("dd:", element);
    return (
      <>
        <strong className="">${element.data}</strong>
      </>
    );
  } else if (element.type === "line") {
    return <Line data={element.data} />;
  } else if (element.type === "bar") {
    return <Bar data={element.data} />;
  }

  return (
    <>
      <div>
        <p>No Widget</p>
      </div>
    </>
  );
};

export default Widget;
