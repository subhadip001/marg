import React from "react";
import img from "/src/assets/logo.png";

export default function Footer() {
  return (
    <div className="grid grid-cols-2 w-[90%] mx-auto mt-16  h-[70vh] gap-60">
      <div className="flex flex-wrap flex-col gap-8 font-['Open_Sans'] text-[#000000]">
        <img src={img} alt="" className="" />
        <div className="  ">
          <h1 className="font-semibold text-xl ">ADDRESS:</h1>
          <p className="text-justify">
            Civic Design Lab, Department of Architecture & Planning
          </p>
          <p>Indian Institute of Technology, Roorkee, Uttarakhand</p>
          <p>India - 247667</p>
          <br />
          <br />
          <p className="font-[600]">VISITORS: 56</p>
        </div>
      </div>

      <div className="font-['Open_Sans']">
        <h1
          for="message"
          class="block mb-2 text-2xl text-right font-[600] text-[#365868]"
        >
          CONNECT WITH US
        </h1>
        <form className="gap-3 flex flex-col justify-end items-end">
          <textarea
            id="message"
            rows="7"
            class="block p-2.5 w-[70%] text-sm text-black  border border-black "
            placeholder="Your message..."
          ></textarea>

          <textarea
            id="email"
            rows="1"
            class="block p-2.5 w-[70%] text-sm text-black   border border-[#000000] "
            placeholder="Email id"
          ></textarea>
          <button
            type="submit"
            class="w-fit h-fit px-6 py-1 text-[100%]  bg-[#2B4F60] text-[#EAD3CB] font-semibold "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
