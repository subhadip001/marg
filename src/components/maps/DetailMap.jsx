import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const DetailMap = () => {
  const [showLeftDetails, setShowLeftDetails] = useState(true);
  const leftDetailsRef = useRef();

  const handleclose = () => {
    setShowLeftDetails(false);
  };

  //write code to close the left details when clicked outside the left details
  const handleClickOutside = (event) => {
    if (
      leftDetailsRef.current &&
      !leftDetailsRef.current.contains(event.target)
    ) {
      setShowLeftDetails(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const LeftDetails = () => {
    return (
      <>
        <div className="bg-[#F2F2F2] w-[30vw] p-5 text-[#2B4F60] rounded-md">
          <div className="flex flex-col justify-center gap-5">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl">Kalka Shimla Route</span>
              <AiOutlineClose
                onClick={handleclose}
                className="cursor-pointer text-xl"
              />
            </div>
            <div className="text-base">
              <span className="font-bold">Description</span>
              <p>
                Mountain Railways of Kalka-Shimla weaves up through the
                Himalayan foothills for 96.5km. Traversing spectacular mountain
                landscape, the route climbs to over 1.5km above sea level,
                passing through 103 tunnels, crossing 864 bridges and turning
                919 times. The Kalka-Shimla Railway was verified as a World
                Heritage Site by UNESCO in 2008. Linear Property 96.60
                kilometers long and 0.76-meter-wide; Buffer zone delineated all
                along the length of the line of varying width.
              </p>
            </div>
            <div className="text-base">
              <span className="font-bold">General Characteristics</span>
              <div>
                <span className="font-semibold">
                  {" "}
                  Geographical co-ordinates:{" "}
                </span>{" "}
                Between 300 51' 08” N & 310 06' 17” N. and 760 56' 15” E & 770
                10' 03” E. <br />{" "}
                <span className="font-semibold"> Region: </span> Haryana &
                Himachal Pradesh <br />{" "}
                <span className="font-semibold"> Travel distance: </span> 96.60
                kilometers <br />{" "}
                <span className="font-semibold"> Management Authority: </span>{" "}
                Northern Railways <br />{" "}
                <span className="font-semibold"> Ownership: </span> Ministry of
                Railways, India Year of Foundation: 1903
              </div>
            </div>
            <div className="text-base">
              <span className="font-bold">UNESCO(WHS)</span>
              <p>
                <span className="font-semibold"> Date of Award: </span> 10th
                July, 2008 <br />{" "}
                <span className="font-semibold"> Category:</span> Mountain
                Railways of India <br />{" "}
                <span className="font-semibold"> Criteria: </span>(ii) (iv)
              </p>
            </div>
          </div>
          <div className="">
            <small>
              DISCLAIMER: This Information is sourced from the document
              “Nomination no. 944ter-003” available on UNESCO World Heritage
              Convention website.
            </small>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="relative">
      {showLeftDetails && (
        <div className="absolute left-5 top-10" ref={leftDetailsRef}>
          <LeftDetails />
        </div>
      )}
      <div>
        <iframe
          onClick={() => {
            setShowLeftDetails(false);
          }}
          src="https://www.google.com/maps/d/embed?mid=1EFSWRgrgw-qPrvML3Uo-oPsehpvTkWo&ehbc=2E312F"
          width="100%"
          className="h-[110vh]"
        ></iframe>
      </div>
    </div>
  );
};

export default DetailMap;
