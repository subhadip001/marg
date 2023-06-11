import React from "react";
import Basic from "/src/components/Basic";

const Reconstruction = () => {
  const arr = [
    { link: "/conservation/preservation", name: "Preservation" },
    { link: "/conservation/rehabilitation", name: "Rehabilitation" },
    { link: "/conservation/restoration", name: "Restoration" },
    { link: "/conservation/reconstruction", name: "Reconstruction" },
   
  ];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-12 items-center justify-center place-content-center">
      <Basic title="CONSERVATION" numbers={arr}></Basic>
      <div className="mb-12 w-[85%] mx-auto grid grid-cols-2">
        <div className="col-span-1">
          Reconstruction pertains to properties that are extensively damaged or
          have been completely lost. The process involves the recreation of the
          original design, appearance, and materials of the road/routes or
          related features. In this case of historic roads/routes, this may
          require a complete replacement if it has deteriorated beyond repair,
          utilizing the original specifications and construction methods.
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};
export default Reconstruction;
