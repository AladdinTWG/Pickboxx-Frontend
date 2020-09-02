import React, {Component} from "react";
import GoogleMapReact from "google-map-react";
import Header from "./Header.js";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className="map">
        <Header />
        <div className="map-div">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyA2JZoiFSHpmlTNGNq_32yQjDMbsBhXcGI" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;