import React from "react";
import GoogleMapReact from "google-map-react";

import "./styles.scss";

const MapComponent = () => {
  return (
    <div className="map-component">
      <GoogleMapReact
        defaultZoom={10}
        resetBoundsOnResize={true}
        defaultCenter={{ lat: 20.5937, lng: 78.9629 }}
      />
    </div>
  );
};

export default MapComponent;
