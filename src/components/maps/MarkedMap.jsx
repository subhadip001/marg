import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneCheckCircle } from "react-icons/ai";


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

  const mapStyles = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { color: "#e9e9e9" },
        { lightness: 17 }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        { color: "#f5f5f5" },
        { lightness: 20 }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        { color: "#ffffff" },
        { lightness: 17 }
      ]
    },
    // Add more custom styles here...
  ];

  const redDotIcon = {
    path: window.google.maps.SymbolPath.CIRCLE,
    fillColor: '#845460',
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 12,
  };

  return (
    <GoogleMap
      id="map"
      zoom={4}
      center={markerPosition}
      mapContainerStyle={{ height: "70vh", width: "100%" }}
      options={{
        ...defaultMapOptions,
        styles: mapStyles,
      }}
    >
      <Marker
        position={markerPosition}
        onClick={handleMarkerClick}
        icon={redDotIcon}
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
