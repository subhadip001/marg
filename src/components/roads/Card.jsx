import React from "react";

function Card(props) {
  return (
    <div class="font-['Open_Sans'] w-[86%] mx-auto h-fit overflow-hidden">
      <img class="w-full" src={props.url} alt="Sunset in the mountains" />
      <div class="py-[3%]">
        <div class="text-[#845460] font-bold text-[120%] mb-[2%]">
          {props.title}
        </div>
        <p class="text-gray-700 text-justify text-[100%]">{props.text}</p>
      </div>
      <div class="text-right underline pt-[2%] pb-[2%]  text-[#845460]">
        READ MORE
      </div>
    </div>
  );
}

export default Card;
