import React from "react";

function Card(props) {
  return (
    <div className="relative font-['Open_Sans'] bg-white w-[90%] h-fit overflow-hidden ">
      <div className="relative">
        <img className="w-full" src={props.url} alt="Sunset in the mountains" />
        <h3 className="absolute  bg-[#845460] font-semibold text-[1.3vw] w-fit   text-[#FFFFFF] top-0 left-0 m-0 px-[5%] py-[1.3%]">
          {props.topLeft}
        </h3>
      </div>

      <div className=" mb-[15%] ml-[7.5%] mr-[12%] text-justify mt-[2%] ">
        <div className="text-[#845460] font-semibold text-[1.4vw]  mb-[3%] text-center">
          {props.title}
        </div>
        <p className="text-gray-600 capitalize mb-[2%] font-normal text-[100%]">
          {props.text}
        </p>
        <div className="absolute right-[12%] px-[2%] pt-[0.7%]  text-[1vw] bg-[#845460] w-fit text-white">
          READ MORE
        </div>
      </div>
    </div>
  );
}

export default Card;

// bottom-[2%] right-[1.8%]
