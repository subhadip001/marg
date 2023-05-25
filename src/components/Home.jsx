import React from "react";
import background from "./rect.jpeg";
import img from "../assets/marg1.png";

const Home = () => {
  return (
    <div
      className=" font-['Open_Sans'] pb-64 home w-full bg-center bg-cover h-screen m-0 flex justify-center text-center flex-col  items-center "
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <img className="w-[36vw]" src={img} alt="image description" />

      <h2 className=" text-[#EAD3CB] text-3xl ">
        Mapping Ancient and Historic Routes using Geo-Spatial Tools
      </h2>

      <hr class=" w-48 h-1 mx-auto my-4  bg-white border-0 rounded" />

      <h3 className=" text-base font-[700px] text-[#BDC7C9]">
        Funded By SHRI Science and Heritage Research Initiative, Department of
        Science & Technology, GOI
      </h3>
    </div>
  );
};
export default Home;
