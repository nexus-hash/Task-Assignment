import React from "react";
import ShopIcon from "../../assets/ShopIcon";
import './Navbar.css';
import SearchBar from "./Search";

export default function Navbar() {
  return <div className="nav">
    <div className="w-full max-w-7xl h-full py-2 space-x-12 bg-transparent flex justify-end items-center ">
      <div className="w-1/2">
        <SearchBar />
      </div>
      <button>
        Home
      </button>
      <button>
        Courses
      </button>
      <button>
        <ShopIcon />
        </button>
      <button className="login-button">
        Login
        </button>
    </div>
  </div>;
}