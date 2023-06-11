import React from "react";
import background from "/src/assets/bg.webp";
import img from "/src/assets/Artboard1.png";
import img1 from "/src/assets/MARG.png";
import CulturalRoutes from "/src/components/landingPage/CulturalRoutes";
import Last from "/src/components/landingPage/culturalRoutes/Last";
import Footer from "/src/components/landingPage/Footer";
const Home = () => {
  return (
    <>
      <div
        className="font-['Lato'] pb-64 w-full h-[110vh] m-0 flex justify-center text-center flex-col items-center  "
        style={{
          background: `linear-gradient(rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.4)),url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0% 10%",
        }}
      >
        <div className="pt-28 pl-32">
          <div className="relative ">
            <img src={img1} className="absolute  -translate-y-20 left-9 "></img>
            <img src={img} alt="" className="" />
          </div>
        </div>

        <h2 className=" text-[#EAD3CB] font-semibold tracking-wide text-3xl text-center ">
          Mapping Ancient and Historic Routes using Geo-Spatial Tools
        </h2>

        <hr class=" w-[20vw] h-1 mx-auto my-4  bg-white border-0 rounded 	" />

        <h3 className="text-lg font-semibold text-[#BDC7C9]">
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
