import React from "react";
import Basic from "/src/components/Basic";
import img from "/src/assets/image7.png";

const HistoricRoads = () => {
  const arr = [
    { link: "/explore/historicroutes", name: "Historic Roads / Routes" },
    { link: "/explore/culturalroutes", name: "Cultural Routes" },
    { link: "/explore/railwayroutes", name: "Cultural Heritage" },
  ];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-12 items-center justify-center place-content-center">
      <Basic title="EXPLORE" numbers={arr}></Basic>
      <div className="mb-12 w-[85%] mx-auto">
        <img src={img} alt="" srcset="" />
      </div>
    </div>
  );
};
export default HistoricRoads;
