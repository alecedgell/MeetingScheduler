import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import {AddCircle} from "@material-ui/icons";

//const AnyReactComponent = ({ text }) => <div>{text}</div>;


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.7981868,
      lng: -91.4996765
    },
    zoom: 17
  };

  render() {
    return (

      <div style={{ height: '100vh', width: '100vw' }}>
        <GoogleMapReact
          //bootstrapURLKeys={{  key: process.env.REACT_APP_GOOGLE_KEY }}
          bootstrapURLKeys={{  key: "AIzaSyBwsn46VVtPMv3HxwsB2ZPkYjBcFF7WKGM"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AddCircle
            lat={44.7981868}
            lng={-91.4996765}
            text="UWEC"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
