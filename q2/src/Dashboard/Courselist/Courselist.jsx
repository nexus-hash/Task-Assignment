import React from "react";
import ItemCard from "./ItemCard";
import CardImage from "../../assets/CardImage.png";

export default function Courselist(props) {
  return (
    <div className="w-full h-full flex flex-wrap justify-start items-start overflow-y-scroll">
      <ItemCard src={CardImage} title="UI/UX Designing Course" price="499" />
      <ItemCard src={CardImage} title="UI/UX Designing Course" price="499" />
      <ItemCard src={CardImage} title="UI/UX Designing Course" price="499" />
      <ItemCard src={CardImage} title="UI/UX Designing Course" price="499" />
      <ItemCard src={CardImage} title="UI/UX Designing Course" price="499" />
      <ItemCard src={CardImage} title="UI/UX Designing Course" price="499" />
      <ItemCard src={CardImage} title="UI/UX Designing Course" price="499" />
      <ItemCard src={CardImage} title="UI/UX Designing Course" price="499" />
      <ItemCard src={CardImage} title="UI/UX Designing Course" price="499" />
    </div>
  );
}
