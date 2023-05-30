import React from "react";
import Basic from "/src/components/Basic";
import img1 from "/src/assets/7.png";
import img2 from "/src/assets/3.png";



const About = () => {
  const arr = ["THE MARG","ICOMOS Charter on Cultural Routes"];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-12 items-center justify-center place-content-center">
      <Basic title="ABOUT" numbers={arr}></Basic>
      <div className="grid grid-cols-7 w-full h-fit gap-56 mb-60">
        <div className=" text-[#2B4F60] text-100 font-normal text-[100%]  pl-8 col-span-3 text-justify  flex flex-col ">
          <p>
            "A heritage route is composed of tangible elements of which the
            cultural significance comes from exchanges and a multi-dimensional
            dialogue across countries or regions, and that illustrate the
            interaction of movement, along the route, in space and time"
            &#40;UNESCO, 1994&#41;.
          </p>
          <br />
          <p>
            The significance of "cultural routes" as one of the four categories
            of World Heritage sites is apparent. The concept is further advanced
            by the ICOMOS charter on cultural routes, which offers guidance on
            the identification, documentation, conservation, and promotion of
            these routes.
          </p>
          <br />
          <p>
            The charter provides a broad framework that does not take into
            account the significance of smaller cultural routes that
            predominantly showcase intangible cultural assets. Additionally, The
            charters do not clearly establish criteria for identifying and
            evaluating Nomadic and transhumance routes, Indigenous routes that
            exhibit agricultural expansion, routes based on Indigenous oral
            knowledge networks, routes that reflect Indigenous or maritime
            trading systems, and other similar routes. &#40;Srichandan et
            al.,2021&#41;.
          </p>
        </div>
        <div className="col-span-4 flex flex-col gap-2  ">
          <img className="w-[70%] h-1/2" src={img1} alt="image description" />
          <img className="w-[70%] h-1/2" src={img2} alt="image description" />
        </div>
      </div>
    </div>
  );
};
export default About;
