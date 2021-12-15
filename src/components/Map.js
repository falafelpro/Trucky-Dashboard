import React, { useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function Map({ isTruckUpdateRequested, setTruck, truck }) {
  const [coordinates, setCoordinates] = useState(truck.location);
  const [address, setAddress] = useState("");
  const handleMapClick = (event) => {
    console.log(event);
  };

  const containerStyle = {
    width: "300px",
    height: "300px",
  };

  const handleChange = (address) => {
    setAddress(address);
  };
  const handleMarkerDrag = (event) => {
    setTruck({
      ...truck,
      location: JSON.parse(JSON.stringify(event.latLng)),
    });
    console.log("onDrag args: ", event.latLng.lat(), event.latLng.lng());
  };
  const handleSelect = (addr) => {
    setAddress(addr);
    geocodeByAddress(addr)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success coord", latLng);
        setCoordinates(latLng);
        setTruck({
          ...truck,
          location: JSON.parse(JSON.stringify(latLng)),
        });
      })
      .catch((error) => console.error("Error", error));
  };
  return (
    <>
      <div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={9}
          onClick={(event) => handleMapClick(event)}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker
            position={coordinates}
            draggable={true}
            onDragEnd={(event) => handleMarkerDrag(event)}
          ></Marker>
          <></>
        </GoogleMap>
      </div>
      <div id="googleMaps">
        {isTruckUpdateRequested ? (
          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        ) : null}
      </div>
    </>
  );
}

export default React.memo(Map);
