import React from "react";
import background from "./Artboard 1@10x.png";


const Home = () => {
  return (
    <div
      className="home w-full bg-cover h-screen mx-auto flex justify-center text-center flex-col font-sans "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-[#EAD3CB] text-2xl ">
        Mapping Ancient and Historic Routes using Geo-Spatial Tools
      </div>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="text-lg text-[#BDC7C9]">
        Funded By SHRI Science and Heritage Research Initiative, Department of
        Science & Technology, GOI
      </div>
    </div>
  );
};
export default Home;
