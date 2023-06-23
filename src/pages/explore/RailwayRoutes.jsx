import React from "react";
import Basic from "/src/components/Basic";
import img from "/src/assets/image7.png";
import MarkedMap from "../../components/maps/MarkedMap";
import { Link, Route, Routes } from "react-router-dom";
import DetailMap from "../../components/maps/DetailMap";
import CoordinateMap from "../../components/maps/CoordinateMap";

const RailWayRoutes = () => {
  const arr = [
    { link: "/explore/historicroutes", name: "Historic Roads / Routes" },
    { link: "/explore/culturalroutes", name: "Cultural Routes" },
    { link: "/explore/railwayroutes", name: "Railway Routes" },
  ];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-12 items-center justify-center place-content-center">
      <Basic title="EXPLORE" numbers={arr}></Basic>
      <div className="mb-12 w-[85%] mx-auto">
        <MarkedMap />
        <Link to={`/explore/railwayroutes/details/map-point-details/${1}`}>test link</Link>
      </div>
    </div>
  );
};
export default RailWayRoutes;
