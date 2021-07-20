import { GoogleMap, Marker } from "react-google-maps";
import React from "react";

const MapViewer = () => {
  return (
    <GoogleMap
      key={'AIzaSyDh2BkK23_KbpbNx0ccK30ETddsmt66ikQ'}
      defaultZoom={6}
      defaultCenter={{ lat: -2.19616, lng: -79.88621 }}
    />
  );
};

export default MapViewer;
