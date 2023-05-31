import React from "react";
import Navbar from "./Navbar";

const Basic = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()} className="h-12 flex items-center pl-8 pr-8">
      <a href="#" class=" hover:underline  text-[#2B4F60]  ">
        {number}
      </a>
    </li>
  ));
  return (
    <>
      <div className="bg-[#BDC7C9] w-full h-full flex flex-col flex-wrap gap-8 pb-4 pt-16  font-['Open_Sans'] ">
        <div className="pl-8">
          <h1 className="text-[calc(1.7vw+0.5rem)] font-bold text-[#845460]">
            {props.title}
          </h1>
        </div>
        <div>
          <ul class="flex flex-wrap items-center divide-x-2 divide-[#FFFFFF] text-[18px]  ">
            {listItems}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Basic;
