import React from "react";
import { NavLink } from "react-router-dom";

import img1 from "/src/assets/7.jpg";
import img2 from "/src/assets/3.jpg";

const About = () => {
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-12 items-center justify-center place-content-center">
      <div className="bg-[#BDC7C9] w-full h-full pt-4 pb-4 flex flex-col flex-wrap gap-8  font-['Open_Sans'] ">
        {/* <div className="w-[85%] mx-auto ">
          <h1 className="text-[calc(1.7vw+0.5rem)] font-bold text-[#845460]">
            ABOUT
          </h1>
        </div> */}
        <div className="w-[85%] mx-auto ">
          <ul className=" flex flex-wrap items-center gap-8 divide-x-2 divide-[#FFFFFF] text-[18px]  ">
            <li className="h-12 flex items-center pl-8  text-[#2B4F60] first:pl-0 ">
              <NavLink
                to="/about/themarg"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
              >
                THE MARG
              </NavLink>
            </li>

            <li className="h-12 flex items-center pl-8  text-[#2B4F60] first:pl-0 ">
              <a
                href="https://www.icomos.org/images/DOCUMENTS/Charters/culturalroutes_e.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ICOMOS Charter on Cultural Routes
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-11 w-[85%] mx-auto h-full mb-20 gap-20 ">
        <div className=" text-[#2B4F60] text-100 font-normal col-span-5 text-justify  flex flex-col ">
          <p>
            MARG stands for “Mapping Ancient and Historic Routes using
            Geo-Spatial Tools”. The project aims to create an open-source
            database that links all institutions, laboratories, and researchers
            engaged in the study of cultural and historic routes across the
            Indian Subcontinent region. As the first stage, the project focuses
            on the trade routes of the Bhotiya tribe in the Himalayan Regions.
            Within the context of the Himalayan region, the Bhotias of
            Uttarakhand traversed cultural routes to reach Tibet's highlands,
            which demonstrates how societies enrich themselves through
            communication over centuries. This ethnically and culturally diverse
            community traditionally lived a nomadic life and can be found in the
            upper reaches of the Great Himalayas, along the Indo-Tibetan border.
          </p>
          <p>
            The core objective of our project is to promote and preserve the
            cultural and heritage roots of the Indian Subcontinent, a noble
            aspiration that serves as the driving force behind our efforts. We
            strive to create an all-encompassing resource that fosters
            collaboration, facilitates the sharing of knowledge and resources,
            and provides a platform for all stakeholders to come together and
            honor the region's rich and multifaceted cultural heritage.
          </p>
          <p>
            This database will be a comprehensive resource, offering easy access
            to information on ongoing work and the experts involved, thereby
            catering to the needs of anyone interested in this field. Therefore,
            We extend an invitation to all institutions, laboratories, and
            researchers engaged in this area to join us in our endeavor and
            contribute to this valuable resource. Together, we can make a
            significant difference in advancing cultural and heritage tourism,
            education, and research in the region.
          </p>
        </div>
        <div className="col-span-6 flex flex-col gap-2  ">
          <img
            className="w-[100%] h-[45%] rounded-xl"
            src={img1}
            alt="image description"
          />
          <img
            className="w-[100%] h-[45%] rounded-xl"
            src={img2}
            alt="image description"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
