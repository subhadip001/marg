import React, { useEffect } from "react";
import img from "/src/assets/logo.png";
import VisitorCounter from "./visitor";
import { useState } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import axios from "axios";

export default function Footer() {
  const [formMessage, setFormMessage] = useState();
  const [formEmail, setFormEmail] = useState();

  const handleChange = async (e) => {
    e.preventDefault();
    // const data = {
    //   S: 1,
    //   Email: formEmail,
    //   Message: formMessage,
    // };
    // console.log(data);

    fetch('https://sheetdb.io/api/v1/297vrs2j90b23?sheet=sheet2', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'Email': formEmail,
                'Message': formMessage
            }
        ]
    })
})
    .then((response) => { 
    response.json()
    }
  )
  .then((data) => {
    console.log(data)
    setFormEmail(" ")
    setFormMessage(" ")});

  };

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
          <VisitorCounter />
        </div>
      </div>

      <div className="font-['Open_Sans']">
        <h1
          htmlFor="message"
          className="block mb-2 text-2xl text-right font-[600] text-[#365868]"
        >
          CONNECT WITH US
        </h1>
        <form
          className="gap-3 flex flex-col justify-end items-end"
          onSubmit={(e) => handleChange(e)}
        >
          <textarea
          required
            id="message"
            value={formMessage}
            rows="7"
            className="block p-2.5 w-[70%] text-sm placeholder-[#3D3D3D] placeholder:italic  border border-black "
            placeholder="Your message..."
            onChange={(e) => {
              setFormMessage(e.target.value);
            }}
          ></textarea>

          <textarea
          required
            id="email"
            value={formEmail}
            rows="1"
            className="block p-2.5 w-[70%] text-sm text-black placeholder:italic placeholder-[#3D3D3D] border border-[#000000] "
            placeholder="Email id"
            onChange={(e) => {
              setFormEmail(e.target.value);
            }}
          ></textarea>
          <button
            type="submit"
            className="w-fit h-fit px-6 py-1 text-[100%]  bg-[#2B4F60] text-[#EAD3CB] font-semibold "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
