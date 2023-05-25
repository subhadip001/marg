import React from "react";

function Card(props) {
  return (
    <div class=" max-w-full w-full rounded overflow-hidden shadow-lg">
      <img class="w-full" src={props.url} alt="Sunset in the mountains" />
      <div class="px-[5%] py-[3%]">
        <div class="text-[#845460] font-bold text-[120%] mb-[2%]">
          {props.title}
        </div>
        <p class="text-gray-700 text-[100%]">{props.text}</p>
      </div>
      <div class="text-right underline px-[5%] pt-[2%] pb-[2%] text-[#845460]">
        Read More...
      </div>
    </div>
  );
}

export default Card;
