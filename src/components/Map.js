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
  lat: 29.27899993577099,
  lng: 48.01817803615405,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBnyvsPT5_15CZKN-MaGhupEGJ5XxM7fYg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9}
        onClick={(event) => handleMapClick(event)}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
