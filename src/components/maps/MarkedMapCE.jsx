import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MarkedMapCE = () => {
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
      elementType: "geometry.strokeWidth",
      stylers: [
        { color: "#FFFFFF" },
        { lightness: 17 }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry.stokeWidth",
      stylers: [
        { color: "#BCBCBC" },
        { lightness: 20 }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        { color: "#ffffff" },
        { lightness: 17 }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off"
        }
      ]
    }
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
      zoom={2.3}
      center={{
        lat: 30.852222,
        lng: 15.9375,
      }}
      mapContainerStyle={{ height: "100vh", width: "100%" }}
      options={{
        ...defaultMapOptions,
        styles: mapStyles,
        minZoom: 2.3,
        gestureHandling: "greedy"
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
              Naulas
            </span>
            {/* <p>UNESCO world heritage site</p> */}
            <p>Nomination Date: </p>
            <p>Built: </p>
            <Link
              className="italic hover:underline"
              to="/explore/culturalelements/detailsMap/1"
            >
              Click here for details
            </Link>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MarkedMapCE;