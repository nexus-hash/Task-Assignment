import React from "react";
import Navbar from "./Navbar/Navbar";
import './Dashboard.css';
import FilterBar from "./Filterbar/Filterbar";

export default function Dashboard() {
  return <div className="dashboard">
    <Navbar />
    <div className="dashboard-content">
    <h1>Design Courses</h1>
    <h2>Courses to get you started</h2>
    <div className="w-1/5">
      <FilterBar />
    </div>
    </div>
  </div>;
}