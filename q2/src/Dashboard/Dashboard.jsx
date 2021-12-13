import React from "react";
import Navbar from "./Navbar/Navbar";
import './Dashboard.css';

export default function Dashboard() {
  return <div className="dashboard">
    <Navbar />
    <div className="dashboard-content">
    <h1>Design Courses</h1>
    <h2>Courses to get you started</h2>
    </div>
  </div>;
}