import React from "react";
import { Link } from "react-router-dom";
import img from "/src/assets/1(8) 1.jpg";
const CulturalRoutes = () => {
  return (
    <div className="font-['Open_Sans'] bg-white w-full text-white h-screen mx-auto  grid grid-cols-9  my-auto">
      <div className="justify-center justify-items-center col-span-4 items-center flex-col place-content-center text-center flex h-full ">
        <img className="w-[31vw] h-[82vh]" src={img} alt="image description" />
      </div>
      <div className="h-full flex flex-col pb-[3vh] justify-center justify-items-center place-content-center col-span-5 px-[7vw] bg-[#2B4F60]">
        <div className="mb-[6vh]">
          <h1 className="text-[calc(1.5vw+0.5rem)] font-semibold">CULTURAL ROUTES</h1>
        </div>
        <div className="text-[1.1vw] text-[#BDC7C9] font-light capitalize text-justify">
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
          <br />
          <Link to="#">
            <button className="text-[3vh] w-fit bg-[#845460] hover:bg-[#845460]-700 text-white mt-6 py-2 px-4 rounded">
              THE MARG PROJECT &gt;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CulturalRoutes;
