import React from "react";
import img from "../assets/1(8) 1.jpg";
const About = () => {
  return (
    <div className="bg-white w-full  h-screen mx-auto  grid grid-cols-2  my-auto">
      <div className="flex justify-items-center justify-center pt-8 px-[6 rem] h-screen ">
        <img
          className="w-[25.563rem] h-[37.75rem]"
          src={img}
          alt="image description"
        />
      </div>
      <div className="h-screen pt-[2rem] pb-6 px-[6rem] bg-[#2B4F60]">
        <div className="mb-[2rem] mt-[1.5rem] ">
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
        <div className="text-base text-justify ">
          <p>
            "A heritage route is composed of tangible elements of which the
            cultural significance comes from exchanges and a multi-dimensional
            dialogue across countries or regions, and that illustrate the
            interaction of movement, along the route, in space and time" UNESCO,
            1994.
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
            trading systems, and other similar routes. Srichandan et al.,2021
          </p>
          <br />
          <a href="http://">
            <button className="bg-[#845460] hover:bg-[#845460]-700 text-white font-bold py-2 px-4 rounded">
              THE MARK PROJECT &gt;
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
