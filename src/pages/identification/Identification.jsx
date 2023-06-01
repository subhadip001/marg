import React from "react";
import Basic from "/src/components/Basic";
import img from "/src/assets/ss.png";

const Identification = () => {
  const arr = [
    { name: "Our Methodology", link: "/identification&development/methodology" },
    { name: "Classification of Historic Roads", link: "/identification&development/historicroads" },
    { name: "Bhotiya Trade Routes", link: "/identification&development/traderoutes" },
    { name: "Routes at risk", link: "/identification&development/routesatrisk" },

  ];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-16 items-center justify-center place-content-center">
      <Basic title="IDENTIFICATION & DOCUMENTATION" numbers={arr}></Basic>

      <div className="grid grid-cols-7 w-[85%] mx-auto h-fit gap-20 mb-16">
        <div className=" text-[#2B4F60] text-100 font-normal text-[100%]  col-span-3 text-justify  flex flex-col ">
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
        <div className="col-span-4 flex flex-col gap-2  ">
          <img className="w-[100%] h-full" src={img} alt="image description" />
        </div>
      </div>
    </div>
  );
};
export default Identification;
