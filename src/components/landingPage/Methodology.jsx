import React from "react";
import img from "/src/assets/ss.png";

const Methodology = () => {
  return (
    <div className="font-['Open_Sans'] bg-white w-full  h-screen mx-auto  grid grid-cols-9  my-auto">
      <div className="h-screen col-span-5 place-content-center px-[4rem] bg-[#BDC7C9] flex justify-items-center flex-col">
        <div className="mb-[6%]">
          <h1 className="text-[calc(1.5vw+0.5rem)] font-bold text-[#845460]">
            OUR METHODOLOGY
          </h1>
        </div>
        <div className="text-[1.2vw] capitalize text-justify font-normal text-[#2B4F60] text-400 ">
          <p>
            The project aims to create an open-source database that links all
            institutions, laboratories, and researchers engaged in the study of
            cultural and historic routes across the Indian Subcontinent region.
            As the first stage, the project focuses on the trade routes of the
            Bhotiya tribe in the Himalayan Regions. Within the context of the
            Himalayan region, the Bhotias of Uttarakhand traversed cultural
            routes to reach Tibet's highlands, which demonstrates how societies
            enrich themselves through communication over centuries. This
            ethnically and culturally diverse community traditionally lived a
            nomadic life and can be found in the upper reaches of the Great
            Himalayas, along the Indo-Tibetan border.
          </p>
          <br />
          <p>
            The core objective of our project is to promote and preserve the
            cultural and heritage roots of the Indian Subcontinent. To create an
            all-encompassing resource that fosters collaboration, facilitates
            the sharing of knowledge and resources, and provides a platform for
            all stakeholders to come together and honor the region's rich and
            multifaceted cultural heritage.
          </p>
        </div>
      </div>
      <div className="flex col-span-4 justify-center justify-items-center items-center flex-col place-content-center text-center p-0">
        <img className="w-fit h-[83vh] " src={img} alt="image description" />
      </div>
    </div>
  );
};

export default Methodology;
