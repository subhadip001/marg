import React from "react";

function Card(props) {
  return (
    <div className="font-['Open_Sans'] w-[100%] h-fit overflow-hidden">
      <img className="w-full" src={props.url} alt="Sunset in the mountains" />
      <div className="py-[5%]">
        <div className="text-[#845460] font-bold text-[140%] mb-[4%]">
          {props.title}
        </div>
        <p className="text-gray-700 text-justify text-[100%]">{props.text}</p>
      </div>
      <div className="text-right underline pt-[2%] pb-[2%]  text-[#845460]">
        READ MORE
      </div>
    </div>
  );
}

export default Card;
