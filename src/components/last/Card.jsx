import React from "react";

function Card(props) {
  return (
    <div>
      <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
        <div className="relative">
          <img className="w-full" src={props.url} alt="Sunset in the mountains" />
          <h3 className="absolute bg-[#845460] text-2xl text-[#FFFFFF] top-5 left-5">
            {props.topLeft}
          </h3>
        </div>

        <div className="px-6 py-4">
          <div className="text-[#845460] font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.text}</p>
        </div>
        <div className="bg-[#845460] text-right underline px-6 pt-4 pb-2 text-white">
          Read More...
        </div>
      </div>
    </div>
  );
}

export default Card;
