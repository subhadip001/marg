import React from "react";

function Card(props) {
  return (
    <div className="relative font-['Open_Sans'] bg-white w-[26vw] h-[68vh] 2xl:max-h-[495px] 2xl:w-fit max-w-sm overflow-hidden shadow-lg">
      <div className="relative">
        <img className="w-full" src={props.url} alt="Sunset in the mountains" />
        <h3 className="absolute bg-[#845460]  text-[1vw] 2xl:text-[0.6vw] 2xl:w[35%]  text-[#FFFFFF] top-0 left-0 m-0 px-[1%] py-[1%]">
          {props.topLeft}
        </h3>
      </div>

      <div className="px-[5%] py-[2%] mb-[8%] text-justify mt-[2%] ">
        <div className="text-[#845460] font-bold text-[1.7vw] 2xl:text-2xl 2xl:mb[1%] 2xl:font-semibold mb-[2%] text-center">
          {props.title}
        </div>
        <p className="text-gray-700 2xl:text-[105%] 2xl:mt-4 text-[100%]">{props.text}</p>
      </div>
      <div className="absolute bottom-[2%] right-[1.8%] 2xl:bottom-[3%] 2xl:right-[4%]  bg-[#845460] w-[25%] pl-[1.2%] text-white">
        Read More
      </div>
    </div>
  );
}

export default Card;
