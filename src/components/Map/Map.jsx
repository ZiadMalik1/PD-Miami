import React from "react";
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs,
} from "react-google-maps";

const MapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 25.772354, lng: -80.197367 }}
    >
      <Marker position={{ lat: 25.772354, lng: -80.197367 }} />
    </GoogleMap>
  ))
);

const Map = () => {
  return (
    <div style={{ borderRadius: "10px", overflow: "hidden" }}>
      <MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDMtWiAQDw1raIiXEyltshsuwPAhvD2ZHM`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "400px", width: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default Map;
