import React from "react";
import Basic from "/src/components/Basic";


const Explore = () => {
  const arr = ["THE MARG","ICOMOS Charter on Cultural Routes"];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-12 items-center justify-center place-content-center">
      <Basic title="ABOUT" numbers={arr}></Basic>
      
    </div>
  );
};
export default Explore;
