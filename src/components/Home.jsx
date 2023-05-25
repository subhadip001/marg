import React from "react";
import background from "./rect.jpeg";
import img from "../assets/Artboard.png";

const Home = () => {
  return (
    <div
      className="relative home w-full bg-center bg-cover h-screen m-0 flex justify-center text-center flex-col font-sans items-center "
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative bottom-28">
        <img className="w-[41vw]" src={img} alt="image description" />
        <h1 className="absolute font-bold text-[#845460] art top-32 right-32 -translate-x-1/2 -translate-y-1/4">
          MARG
        </h1>
      </div>
      <div className="absolute  -translate-y-1/5 	">
        <h2 className="relative text-[#EAD3CB] text-3xl ">
          Mapping Ancient and Historic Routes using Geo-Spatial Tools
        </h2>

        <hr class="relative w-48 h-1 mx-auto my-4  bg-white border-0 rounded" />

        <h3 className="relative text-base  text-[#BDC7C9]">
          Funded By SHRI Science and Heritage Research Initiative, Department of
          Science & Technology, GOI
        </h3>
      </div>
    </div>
  );
};
export default Home;
