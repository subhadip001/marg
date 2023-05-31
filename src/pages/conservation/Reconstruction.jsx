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
      <div className="mb-12 w-[85%] mx-auto">
        In the context of heritage conservation, preservation pertains to
        properties that have been preserved in their largely intact form, and
        are representative of the period of significance. This includes historic
        roads/routes and related resources that have maintained their original
        design and materials in a good state of repair. The preservation
        approach primarily involves activities and measures that focus on
        maintenance and upkeep of such resources.
      </div>
    </div>
  );
};
export default Reconstruction;
