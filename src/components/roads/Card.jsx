import React from "react";

function Card(props) {
  return (
    <div class="font-['Open_Sans'] max-w-full w-full h-fit overflow-hidden">
      <img class="w-full" src={props.url} alt="Sunset in the mountains" />
      <div class="py-[3%] 2xl:py-[5%]">
        <div class="text-[#845460] font-bold text-[120%] mb-[2%] 2xl:text-[170%]">
          {props.title}
        </div>
        <p class="text-gray-700 text-justify 2xl:text-[150%] text-[100%]">{props.text}</p>
      </div>
      <div class="text-right underline pt-[2%] pb-[2%] 2xl:text-[150%] text-[#845460]">
        READ MORE
      </div>
    </div>
  );
}

export default Card;
