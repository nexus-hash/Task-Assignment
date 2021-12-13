import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Dashboard.css";
import FilterBar from "./Filterbar/Filterbar";
import Courselist from "./Courselist/Courselist";
import DisplayCard from "./DisplayCard/DisplayCard";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <h1>Design Courses</h1>
        <h2>Courses to get you started</h2>
        <div className="w-full flex flex-row justify-center items-start pb-4" style={{height:"70vh"}}>
        <div className="w-1/5 h-full border mt-6">
          <FilterBar />
        </div>
        <div className="w-4/5 h-full mt-6">
          <Courselist />
        </div>
        </div>
        <h1 className="mt-14">Advance your career with new skill </h1>
        <DisplayCard />
      </div>
    </div>
  );
}
