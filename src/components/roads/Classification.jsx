import React from "react";
import Card from "./Card";
import img1 from "./image 1.jpg";
import img2 from "./image 2.png";
import img3 from "./image 3.png";

function Classification() {
  return (
    <div className="h-screen w-full  flex flex-col justify-center justify-items-center p-16">
      <div className="text-[#845460] text-3xl font-bold mb-4">
        CLASSIFICATION OF HISTORIC ROADS / ROUTES
      </div>
      <div className="grid grid-cols-3 mt-8 w-full ">
        <Card
          url={img1}
          title="LAND ROUTES"
          text="The core objective of our project is to promote and preserve the cultural and heritage roots of the Indian Subcontinent."
        ></Card>
        <Card
          url={img2}
          title="SEA ROUTES"
          text="The core objective of our project is to promote and preserve the cultural and heritage roots of the Indian Subcontinent."
        ></Card>
        <Card
          url={img3}
          title="CANAL / RIVER ROUTES"
          text="The core objective of our project is to promote and preserve the cultural and heritage roots of the Indian Subcontinent."
        ></Card>
      </div>
    </div>
  );
}

export default Classification;
