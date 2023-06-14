import React, { useRef, useEffect, useState } from "react";

const CoordinateMap = () => {
  const mapRef = useRef(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 0, lng: 0 },
      zoom: 3,
      mapTypeId: window.google.maps.MapTypeId.SATELLITE,
    });

    // Add a click event listener to the map
    map.addListener("click", (event) => {
      const clickedLatLng = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };

      // Create a marker for the clicked

      if (marker) {
        marker.setMap(null);
        marker.map = null;
        marker.position = null
      }

      const newMarker = new window.google.maps.Marker({
        position: clickedLatLng,
        map: map,
      });

      setMarker(newMarker);

      console.log("Clicked coordinates:", clickedLatLng);
    });
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default CoordinateMap;
