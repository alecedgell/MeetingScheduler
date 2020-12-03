import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import "@reach/combobox/styles.css";


const libraries = ["places"];
const mapContainerStyle = {
  height: "40vh",
  width: "40vw",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 44.7979056,
  lng: -91.5006304,
};

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });
  //const [markers, setMarkers] = React.useState([]);
  //const [selected, setSelected] = React.useState(null);

  //const onMapClick = React.useCallback((e) => {  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);



  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={17}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >

      </GoogleMap>
    </div>
  );
}







