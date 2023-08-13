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
    { link: "/explore/culturalelements", name: "Cultural Elements" },
  ];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap items-center justify-center place-content-center">
      <Basic title="EXPLORE" numbers={arr}></Basic>
      <div className="w-[100%] mx-auto">
        <MarkedMap />
      </div>
    </div>
  );
};
export default RailWayRoutes;
