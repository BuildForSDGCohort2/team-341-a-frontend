import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { getMapData, displayLocation, errorCallback } from '../../helper/googleRequest';

const mapStyles = {
  width: '100%',
  height: '100vh'
};

class MapComponent extends Component {
  state = {
    showPopup: false,  
    activeMarker: {},  
    selectedPlace: {} 
  };
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showPopup: true
    });
    componentDidMount() {
      // getMapData(this.locData, errorCallback)
    } 
    onClose = props => {
      if (this.state.showPopup) {
        this.setState({
          showPopup: false,
          activeMarker: null
        });
      }
    };
    locData = (position) => {
      var x = position.coords.latitude;
      var y = position.coords.longitude;
      displayLocation(x,y)
      .then(res => console.log(res));
    };

  render () {

  return ( 
      <Map
      google={this.props.google}
      zoom={6}
      style={mapStyles}
      initialCenter={
        {
          lat:  11.4333,
          lng: -1.1484
        }
      }
    >
      <Marker
          onClick={this.onMarkerClick}
          name={'SDG Team-341-A'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showPopup}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
    </Map>
   );

  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_APIKEY
})(MapComponent);