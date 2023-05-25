import React from "react";
import Card from "./Card";
import img4 from "./image 4.png";
import img5 from "./image 5.png";
import img6 from "./image 6.png";

function Classification() {
  return (
    <div className="bg-[#BDC7C9] h-screen w-full mx-auto pl-16 py-12  flex flex-col justify-center justify-items-center">
      <div className="h-screen w-full grid grid-cols-3 mt-8">
        <Card
          url={img4}
          topLeft="LANDSCAPE"
          title="MEADOWS"
          text="The core objective of our project is to promote and preserve the cultural and heritage roots of the Indian Subcontinent."
        ></Card>
        <Card
          url={img5}
          topLeft="NODAL INSTITUTION"
          title="CIVIC DESIGN LAB"
          text="The core objective of our project is to promote and preserve the cultural and heritage roots of the Indian Subcontinent."
        ></Card>
        <Card
          url={img6}
          topLeft="INTANGIBLE HERITAGE"
          title="CULTURAL GATHERINGS"
          text="The core objective of our project is to promote and preserve the cultural and heritage roots of the Indian Subcontinent."
        ></Card>
      </div>
    </div>
  );
}

export default Classification;
