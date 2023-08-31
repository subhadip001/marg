import React from "react";
import Basic from "/src/components/Basic";
// import img from "/src/assets/image7.png";
import MarkedMapCE from "../../components/maps/MarkedMapCE";

const CulturalElements = () => {
  const arr = [
    { link: "/explore/historicroutes", name: "Historic Roads / Routes" },
    { link: "/explore/culturalroutes", name: "Cultural Routes" },
    { link: "/explore/railwayroutes", name: "Railway Routes" },
    { link: "/explore/culturalelements", name: "Cultural Elements" },
  ];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-2 items-center justify-center place-content-center">
      <Basic title="EXPLORE" numbers={arr}></Basic>
      <div className="w-[100%] mx-auto">
        <MarkedMapCE />
      </div>
    </div>
  );
};
export default CulturalElements;