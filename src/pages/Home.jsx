import React from "react";
import background from "./rect.jpeg";
import img from "/src/assets/Artboard1.png";
import img1 from "/src/assets/MARG.png";
import CulturalRoutes from "/src/components/landingPage/CulturalRoutes";
import Last from "/src/components/landingPage/culturalRoutes/Last";
import Footer from "/src/components/landingPage/Footer";
const Home = () => {
  return (
    <>
      <div
        className=" font-['Open_Sans'] pb-64 home w-full bg-center bg-cover h-screen m-0 flex justify-center text-center flex-col items-center pt-28 pl-32 "
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative ">
          <img
            src={img1}
            className="marg absolute  p-0 top-0 -translate-y-20 left-11 "
          ></img>
          <img src={img} alt="" className="" />
        </div>

        <h2 className=" text-[#EAD3CB] font-semibold text-3xl tracking-wide -translate-x-4  ">
          Mapping Ancient and Historic Routes using Geo-Spatial Tools
        </h2>

        <hr class=" w-[20vw] h-1 mx-auto my-4  bg-white border-0 rounded -translate-x-4	" />

        <h3 className=" text-lg font-semibold text-[#BDC7C9] -translate-x-4	">
          Funded By SHRI Science and Heritage Research Initiative, Department of
          Science & Technology, GOI
        </h3>
      </div>
      <CulturalRoutes></CulturalRoutes>
      <Last></Last>
      <Footer></Footer>
    </>
  );
};
export default Home;
