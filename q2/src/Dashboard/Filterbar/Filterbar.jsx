import React from "react";
import CloseTopicIcon from "../../assets/CloseTopicIcon";
import './Filterbar.css'

function TopicCards(props){
  return (
    <div className="topic-cards">
      <div className="topic-title">{props.title}</div>
      <button>
        <CloseTopicIcon />
      </button>
    </div>
  );
}

export default function FilterBar(){
  return (
    <div className="w-full flex flex-col mt-6 p-4 border">
      <h1 className="heading">Filter</h1>
      <h3 className="sub-heading">Topic</h3>
      <div className="topic">
        <TopicCards title="Design" />
        <TopicCards title="Design" />
        <TopicCards title="Design" />
      </div>
      <h3 className="sub-heading">Level</h3>
      <div className="w-full flex flex-col">
        <div>
          <input type="checkbox" name="level" value="Beginner" />
          <span className="input-span">Beginner</span>
        </div>
        <div>
          <input type="checkbox" name="level" value="Intermediate" />
          <span className="input-span">
            Intermediate
          </span>
        </div>
        <div>
          <input type="checkbox" name="level" value="Advanced" />
          <span className="input-span">Advanced</span>
        </div>
        <div>
          <input type="checkbox" name="level" value="All" />
          <span className="input-span">
            All the above
          </span>
        </div>
      </div>
      <h3 className="sub-heading">Price</h3>
      <div className="w-full flex flex-col">
        <div>
          <input type="checkbox" name="price" value="499-1000" />
          <span className="input-span">499-1000</span>
        </div>
        <div>
          <input type="checkbox" name="price" value="499-1000" />
          <span className="input-span">1000-1499</span>
        </div>
        <div>
          <input type="checkbox" name="price" value="499-1000" />
          <span className="input-span">1500-1999</span>
        </div>
        <div>
          <input type="checkbox" name="price" value="499-1000" />
          <span className="input-span">2000-2499</span>
        </div>
      </div>
    </div>
  );
}