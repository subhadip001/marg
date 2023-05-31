import React from "react";

function Card(props) {
  return (
    <div class="font-['Open_Sans'] w-[100%] h-fit overflow-hidden">
      <img class="w-full" src={props.url} alt="Sunset in the mountains" />
      <div class="py-[5%]">
        <div class="text-[#845460] font-bold text-[140%] mb-[4%]">
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
