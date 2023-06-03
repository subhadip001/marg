import React from "react";
import { Link } from "react-router-dom";
import img from "/src/assets/1(8).jpg";
import { BsChevronRight } from "react-icons/bs";
const CulturalRoutes = () => {
  return (
    <div className="font-['Open_Sans'] bg-white w-full text-white h-screen mx-auto  grid grid-cols-2 ">
      <div className="justify-center justify-items-center col-span-1 items-center flex-col place-content-center text-center flex h-full ">
        <img className=" h-[85vh]" src={img} alt="image description" />
      </div>
      <div className="h-full flex justify-center justify-items-center items-center col-span-1 bg-bb">
        <div className="w-[65%] mx-auto flex flex-col gap-12">
          <div className="">
            <h1 className="text-[calc(1.6vw+0.6rem)] font-semibold">
              CULTURAL ROUTES
            </h1>
          </div>
          <div className="font-['Open_Sans'] text-[82%] text-[#FFFFFF] flex flex-wrap gap-16 font-[400] capitalize text-justify">
            <div>
              <p>
                "A heritage route is composed of tangible elements of which the
                cultural significance comes from exchanges and a
                multi-dimensional dialogue across countries or regions, and that
                illustrate the interaction of movement, along the route, in
                space and time" &#40;UNESCO, 1994&#41;.
              </p>
              <br />
              <p>
                The significance of "cultural routes" as one of the four
                categories of World Heritage sites is apparent. The concept is
                further advanced by the ICOMOS charter on cultural routes, which
                offers guidance on the identification, documentation,
                conservation, and promotion of these routes.
              </p>
              <br />
              <p>
                The charter provides a broad framework that does not take into
                account the significance of smaller cultural routes that
                predominantly showcase intangible cultural assets. Additionally,
                The charters do not clearly establish criteria for identifying
                and evaluating Nomadic and transhumance routes, Indigenous
                routes that exhibit agricultural expansion, routes based on
                Indigenous oral knowledge networks, routes that reflect
                Indigenous or maritime trading systems, and other similar
                routes. &#40;Srichandan et al.,2021&#41;.
              </p>
            </div>
            <Link to="/about/themarg">
              <button className="font-['Lato'] font-normal text-[120%] w-fit bg-[#845460] hover:bg-[#845460]-700 text-white flex items-center px-3 py-3  rounded-lg">
                  <h1 className="inline pr-2">THE MARG PROJECT</h1>
                  <BsChevronRight className="inline" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalRoutes;
