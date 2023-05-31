import React from "react";
import Basic from "/src/components/Basic";

const Policy = () => {
  const arr = [
    { link: "/management/safety", name: "Safety" },
    { link: "/management/liability", name: "Liability" },
    { link: "/management/policy", name: "Policy" },
    { link: "/management/heritagebylaws", name: "Heritage By-Laws" },
    {
      link: "/management/keystakeholders",
      name: "Key Stakeholders / Custodians",
    },
  ];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-12 items-center justify-center place-content-center">
      <Basic title="MANAGEMENT" numbers={arr}></Basic>
      <div className="mb-12 w-[85%] mx-auto"></div>
    </div>
  );
};
export default Policy;
