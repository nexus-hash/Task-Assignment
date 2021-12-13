import React from "react";
import SearchIcon from "../../assets/SearchIcon";
import './Search.css';

export default function SearchBar(){
  return (
    <div className="search-bar">
      <SearchIcon />
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  )
}