import React from "react";

export default function ItemCard(props){
  return(
    <div className="w-1/3 h-1/2 flex flex-col justify-start px-4 pb-4 mb-4" style={{height:"53%"}}>
      <img src={props.src} alt="Error loading" className="w-full h-full border"></img>
      <div className="text-xl w-full">{props.title}</div>
      <div className="text-xl">{"Rs. "+props.price}</div>
    </div>
  );
}