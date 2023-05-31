import React from "react";
import Card from "../../components/roads/Card";
import img1 from "/src/components/roads/image 1.jpg";
import img2 from "/src/components/roads/image 2.png";
import img3 from "/src/components/roads/image 3.png";
import Basic from "../../components/Basic"

function Classification() {
  const arr = [
    {
      name: "Our Methodology",
      link: "/identification&development/methodology",
    },
    {
      name: "Classification of Historic Roads",
      link: "/identification&development/historicroads",
    },
    {
      name: "Bhotiya Trade Routes",
      link: "/identification&development/traderoutes",
    },
    {
      name: "Routes at risk",
      link: "/identification&development/routesatrisk",
    },
  ];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-16 items-center justify-center place-content-center">
      <Basic title="IDENTIFICATION & DOCUMENTATION" numbers={arr}></Basic>
        <div className=" font-['Open_Sans'] h-screen  w-[85%] mx-auto grid grid-cols-3 gap-[3vw]">
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
