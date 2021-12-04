import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const handleMapClick = (event) => {
  console.log(event);
};
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBnyvsPT5_15CZKN-MaGhupEGJ5XxM7fYg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={(event) => handleMapClick(event)}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
