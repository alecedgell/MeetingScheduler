import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import Page from "../../../components/Page";


const libraries = ["places"];
const mapContainerStyle = {
  height: "45vw",
  width: "100%",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 44.7979056,
  lng: -91.5006304,
};

const GMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);



  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div id="map_canvas">
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={18}
          center={center}
          options={options}
          onLoad={onMapLoad}
          >
        </GoogleMap>
    </div>
  );
}
export default GMap;

