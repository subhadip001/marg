import React from "react";

function Card(props) {
  return (
    <div>
      <div className="relative bg-white max-w-sm overflow-hidden shadow-lg">
        <div className="relative">
          <img className="w-full" src={props.url} alt="Sunset in the mountains" />
          <h3 className="absolute bg-[#845460] text-2xl text-[#FFFFFF] top-0 left-0 m-0 px-2 py-1">
            {props.topLeft}
          </h3>
        </div>

        <div className="px-6 py-4 mb-12 text-justify">
          <div className="text-[#845460] font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.text}</p>
        </div>
        <div className="absolute bottom-4  right-4  bg-[#845460] w-[100px] pl-2 text-white">
          Read More
        </div>
      </div>
    </div>
  );
}

export default Card;
