import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Basic = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li
      key={number.name.toString()}
      className="h-12 flex items-center pl-8  text-[#2B4F60] first:pl-0 "
    >
      <NavLink
        to={number.link}
        className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
      >
        {number.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      <div className="bg-[#BDC7C9] w-full h-full pt-16 pb-4 flex flex-col flex-wrap gap-8  font-['Open_Sans'] ">
        <div className="w-[85%] mx-auto ">
          <h1 className="text-[calc(1.7vw+0.5rem)] font-bold text-[#845460]">
            {props.title}
          </h1>
        </div>
        <div className="w-[85%] mx-auto ">
          <ul class=" flex flex-wrap items-center gap-8 divide-x-2 divide-[#FFFFFF] text-[18px]  ">
            {listItems}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Basic;

//pb-4 pt-16 pl-32
