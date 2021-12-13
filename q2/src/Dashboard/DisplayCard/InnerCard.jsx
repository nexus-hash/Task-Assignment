import React from "react";

export default function InnerCard(props){
  return (
    <div className="w-full h-full flex flex-row justify-start items-start mx-4">
      <img
        src={props.src}
        alt="Error loading"
        className="w-1/3 h-full mr-8"
      ></img>
      <div className="w-full h-full flex flex-col justify-between items-start pr-4">
        <div className="text-3xl w-full text-white mb-6">{props.title}</div>
        <div className="text-2xl w-5/6 h-full text-white text-opacity-60 mb-12">
          {props.description}
        </div>
        <div className="text-2xl text-white">{"Rs. " + props.price}</div>
      </div>
    </div>
  );
}