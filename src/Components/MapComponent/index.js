import React from "react";
import GoogleMapReact from "google-map-react";
import "./styles.scss";

function MapComponent(props) {
  return (
    <div className="map-component">
      <GoogleMapReact
        defaultZoom={10}
        resetBoundsOnResize={true}
        defaultCenter={{ lat: 47.36667, lng: 8.55 }}
      />
    </div>
  );
}

export default MapComponent;
