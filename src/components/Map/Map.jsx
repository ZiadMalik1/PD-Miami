import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
  InfoWindow,
} from "react-google-maps";

const location = {
  address: "Lot 33 (155 SW 2nd Ave, Miami, FL 33130)",
  lat: 25.772354,
  lng: -80.197367,
};

const MapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 25.772354, lng: -80.197367 }}
    >
      <Marker position={{ lat: 25.772354, lng: -80.197367 }}>
        {/* Show the InfoWindow */}
        {props.isInfoWindowOpen && (
          <InfoWindow onCloseClick={props.onMarkerClose}>
            <div style={{ textAlign: "center" }}>
              <h3>Lot 33</h3>
              <a
                href={`https://www.google.com/maps?q=${25.772354},${-80.197367}`}
                target="_blank"
                style={{
                  color: "#007bff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                155 SW 2nd Ave, Miami, FL 33130
              </a>
            </div>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  ))
);

const Map = () => {
  const [isInfoWindowOpen, setInfoWindowOpen] = useState(false);

  useEffect(() => {
    // Open the InfoWindow by default when the component mounts
    setInfoWindowOpen(true);
  }, []);

  const handleMarkerClose = () => {
    setInfoWindowOpen(false);
  };

  return (
    <div style={{ borderRadius: "10px", overflow: "hidden" }}>
      <MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDMtWiAQDw1raIiXEyltshsuwPAhvD2ZHM`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "400px", width: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        isInfoWindowOpen={isInfoWindowOpen}
        onMarkerClose={handleMarkerClose}
      />
    </div>
  );
};

export default Map;
