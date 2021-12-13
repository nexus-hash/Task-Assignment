import React from "react";
import InnerCard from "./InnerCard";
import CardImage from '../../assets/CardImage.png';
import BackArrowIcon from "../../assets/BackArrow";
import ForwardArrowIcon from "../../assets/ForwardArrow";

import './DisplayCard.css';

export default function DisplayCard(){
  return(
    <div className="disp-cards" style={{ backgroundColor:"#00053c"}}>
      <button>
      <BackArrowIcon />
      </button>
      <div className="w-full">
      <InnerCard src={CardImage} className="h-full w-1/2" title="UI/UX Designing Course" description="Lorem ipsum is the dummy text used tokdkdi kdolll kolk yundjkdi idkdldie dkdldiek idiekm in the nrooot ." price="699"/>
      </div>
      <button>
      <ForwardArrowIcon />
      </button>
    </div>
  );
}