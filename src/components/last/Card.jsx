import React from "react";

function Card(props) {
  return (
    <div className="relative bg-white w-[90%]  max-w-sm overflow-hidden shadow-lg">
      <div className="relative">
        <img className="w-full" src={props.url} alt="Sunset in the mountains" />
        <h3 className="absolute bg-[#845460] text-[1vw] text-[#FFFFFF] top-0 left-0 m-0 px-[1%] py-[1%]">
          {props.topLeft}
        </h3>
      </div>

      <div className="px-[5%] py-[2%] mb-[8%] text-justify mt-[2%]">
        <div className="text-[#845460] font-bold text-[140%] mb-[2%] text-center">
          {props.title}
        </div>
        <p className="text-gray-700 text-[100%]">{props.text}</p>
      </div>
      <div className="absolute bottom-[2%]  right-[1.8%]  bg-[#845460] w-[25%] pl-[0.5%] text-white">
        Read More
      </div>
    </div>
  );
}

export default Card;
