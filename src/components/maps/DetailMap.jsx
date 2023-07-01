import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { secondMapDetailsData } from "../../../store/mapDetailsData";
import kalkaShimla1 from "../../../store/Kalka Shimla Train Route1.json";
import kalkaShimla2 from "../../../store/Kalka Shimla Train Route2.json";

const DetailMap = () => {
  const [showLeftDetails, setShowLeftDetails] = useState(true);
  const leftDetailsRef = useRef();

  const handleclose = () => {
    setShowLeftDetails(false);
  };

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

  useEffect(() => {
    var map;

    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 30.94, lng: 77 },
      mapTypeId: "styled",
    });

    var brownishMapType = new google.maps.StyledMapType(
      [
        {
          stylers: [
            { hue: "#ebdedd" },
            { saturation: -30 },
            { lightness: 5 },
          ],
        },
      ],
      { name: "Brownish Map" }
    );
  
    
    map.mapTypes.set("styled", brownishMapType);
    map.setMapTypeId("styled");

    map.data.setStyle({
      strokeColor: "#BA265C",
      strokeWeight: 3,
      strokeOpacity: 1,
    });

    map.data.addGeoJson(kalkaShimla1);
    map.data.addGeoJson(kalkaShimla2);

    var infowindow = new google.maps.InfoWindow();

    map.data.addListener("click", function (event) {
      var id = event.feature.h.name;
      const mapDetailsData = secondMapDetailsData.find(
        (map) => map.id == event.feature.h.name
      );
      const name = mapDetailsData.name;
      const elevation = mapDetailsData.desc.elevation;
      const distt = mapDetailsData.desc.distt;
      const link = mapDetailsData.link;
      var nameHTML =
        "<div style='width:150px; font-weight: 700'; font-size: 1rem>" +
        name +
        "</div>";

      var elevationHTML =
        "<span style='font-size: 0.875rem;'>" +
        "Elevation: " +
        elevation +
        "</span>";
      var disttHTML = "<span>" + "District: " + distt + "</span>";

      var linkHTML =
        "<a style='text-decoration: underline;' href=" +
        link +
        ">" +
        "<em>" +
        "Click here for details" +
        "</em>" +
        "</a>";
      infowindow.setContent(
        "<div style='width:200px; color: #2B4F60 ; padding: 5px 8px ; display: flex; flex-direction: column; gap: 7px; '>" +
          nameHTML +
          elevationHTML +
          disttHTML +
          linkHTML +
          "</div>"
      );
      infowindow.setPosition(event.feature.getGeometry().get());
      infowindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
      infowindow.open(map);
    });
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
        <div className="absolute left-5 top-10 z-50" ref={leftDetailsRef}>
          <LeftDetails />
        </div>
      )}
      <div id="map" style={{ height: "110vh", width: "100%" }}></div>
    </div>
  );
};

export default DetailMap;
