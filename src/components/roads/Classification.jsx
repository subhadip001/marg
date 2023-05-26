import React from "react";
import Card from "./Card";
import img1 from "./image 1.jpg";
import img2 from "./image 2.png";
import img3 from "./image 3.png";

function Classification() {
  return (
    <div className="font-['Open_Sans'] h-screen w-full  flex flex-col justify-center justify-items-center pl-[3.8%] pt-[5.1%] pb-[6.3%] pr-[6.1%] 2xl:pt-[8%] ">
      <div className="text-[#845460] text-[200%] font-bold mb-[2%] 2xl:mb-[4%] 2xl:text-[300%]">
        CLASSIFICATION OF HISTORIC ROADS / ROUTES
      </div>
      <div className="grid grid-cols-3 2xl:h-[100%] 2xl:gap-[3%] w-full gap-[6%]">
        <div className="w-fit">
          <Card
            url={img1}
            title="LAND ROUTES"
            text="The core objective of our project is to promote and preserve the cultural and heritage roots of the Indian Subcontinent."
          ></Card>
        </div>
        <div className="w-fit">
          <Card
            url={img2}
            title="SEA ROUTES"
            text="The core objective of our project is to promote and preserve the cultural and heritage roots of the Indian Subcontinent."
          ></Card>
        </div>
        <div className="w-fit">
          <Card
            url={img3}
            title="CANAL / RIVER ROUTES"
            text="The core objective of our project is to promote and preserve the cultural and heritage roots of the Indian Subcontinent."
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default Classification;
