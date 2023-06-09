import React from "react";
import Basic from "/src/components/Basic";
import { Link } from "react-router-dom";
export default function TradeRoutes() {
  const arr = [
    {
      name: "Our Methodology",
      link: "/identification&development/methodology",
    },
    {
      name: "Classification of Historic Roads",
      link: "/identification&development/historicroads",
    },
    {
      name: "Bhotiya Trade Routes",
      link: "/identification&development/traderoutes",
    },
    {
      name: "Routes at risk",
      link: "/identification&development/routesatrisk",
    },
  ];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-20 items-center justify-center place-content-center">
      <Basic title="IDENTIFICATION & dOCUMENTATION" numbers={arr}></Basic>
      <div className="mb-12 w-[85%] mx-auto flex flex-col gap-40 pr-36">
        <div className="flex justify-between">
          <button
            type="button"
            class="text-[#2B4F60] bg-[#D9D9D9] font-semibold rounded-full text-lg px-6 py-4 text-center"
          >
            <Link>MENTAL MAPPING</Link>
          </button>
          <button
            type="button"
            class="text-[#2B4F60] bg-[#D9D9D9] font-semibold rounded-full text-lg px-6 py-4 text-center"
          >
            <Link>TANGIBLE ASSETS</Link>
          </button>
          <button
            type="button"
            class="text-[#2B4F60] bg-[#D9D9D9] font-semibold rounded-full text-lg px-6 py-4 text-center"
          >
            <Link>INTANGIBLE ASSETS</Link>
          </button>
        </div>
        <ul className="list-disc text-[#2B4F60]">
          <li>Mental Mapping</li>
          <li>
            Tangible Assets: &#40;Stone Structures, Religious building, temples,
            etc&#41;
            <ul className="list-disc pl-4">
              <li>Protected</li>
              <li>Unprotected</li>
            </ul>
          </li>
          <li>
            Intangible Assets:
            <ul className="list-disc pl-4">
              <li>Festivals & Events</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
