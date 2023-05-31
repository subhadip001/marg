import React from "react";
import Basic from "/src/components/Basic";

const NewUser = () => {
  const arr = [
    { link: "/themargnetwork/newinstitutionuser", name: "New Institution User" },
    { link: "/themargnetwork/associatedinstitutions", name: "Associated Research Institutions" },
    { link: "/themargnetwork/networkcontributions", name: "Network Contributions" },
  ];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-12 items-center justify-center place-content-center">
      <Basic title="THE MARG NETWORK" numbers={arr}></Basic>
      <div className="mb-12 w-[85%] mx-auto"></div>
    </div>
  );
};
export default NewUser;
