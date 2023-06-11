import React from "react";
import Basic from "/src/components/Basic";

const Restoration = () => {
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
          Restoration pertains to properties that still possess significant
          elements from the period of historical significance, although they may
          need some degree of repair, alteration, or removal of non-contributing
          features. This primarily applies to historic roads/routes and related
          resources that retain their original design and materials. In the case
          of restoration, the emphasis is on maintaining and preserving the
          intact historic features, restoring lost elements, and eliminating
          unsuitable features, thereby enhancing the property's authenticity.
        </div>
      </div>
    </div>
  );
};
export default Restoration;
