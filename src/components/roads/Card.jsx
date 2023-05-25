import React from "react";

function Card  (props) {
  return (
    <div>
      <div class=" max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={props.url} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="text-[#845460] font-bold text-xl mb-2">{props.title}</div>
          <p class="text-gray-700 text-base">{props.text}</p>
        </div>
        <div class="text-right underline px-6 pt-4 pb-2 text-[#845460]">
          Read More...
        </div>
      </div>
    </div>
  );
}

export default Card