import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MarkedMap = () => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const handleMarkerClick = () => {
    setShowInfoWindow(true);
  };

  const handleMarkerCloseClick = () => {
    setShowInfoWindow(false);
  };

  const defaultMapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
  };

  const markerPosition = {
    lat: 30.852222,
    lng: 76.9375,
  };

  return (
    <GoogleMap
      id="map"
      zoom={4}
      center={markerPosition}
      mapContainerStyle={{ height: "70vh", width: "100%" }}
      options={defaultMapOptions}
    >
      <Marker
        position={markerPosition}
        onClick={handleMarkerClick}
      />
      {showInfoWindow && (
        <InfoWindow
          position={markerPosition}
          onCloseClick={handleMarkerCloseClick}
        >
          <div>
            <span className="text-lg font-semibold">
              Kalka Shimla Rail Route
            </span>
            <p>UNESCO world heritage site</p>
            <p>Nomination Date: </p>
            <p>Built: </p>
            <Link
              className="italic hover:underline"
              to="/explore/railwayroutes/details"
            >
              Click here for details
            </Link>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MarkedMap;
