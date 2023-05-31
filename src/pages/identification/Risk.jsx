import React from "react";
import Basic from "/src/components/Basic";
import img from "/src/assets/image7.png";

const Risk = () => {
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
    <div className="font-['Open_Sans'] flex flex-wrap gap-12 items-center justify-center place-content-center">
      <Basic title="IDENTIFICATION & dOCUMENTATION" numbers={arr}></Basic>
      <div className="mb-12 w-[85%] mx-auto">
        <img src={img} alt="" srcset="" />
      </div>
    </div>
  );
};
export default Risk;
