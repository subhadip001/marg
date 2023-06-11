import React from "react";
import Basic from "/src/components/Basic";

const Rehabilitation = () => {
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
          Rehabilitation pertains to properties that, while reflecting the
          period of significance, may require some repair or alteration. This
          pertains to historic roads/routes and related resources that are in
          fair condition, or those that require modification for safety
          purposes, while maintaining their original design and materials. Under
          rehabilitation, activities and actions primarily focus on maintenance,
          careful handling, and limited replacement or modification.
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};
export default Rehabilitation;
