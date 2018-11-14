import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


class Map extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let center = {
      lat: 73.5673,
      lng: 45.5017
    }

    if (this.props.selectedFlat) {
      center = {
        lat: this.props.selectedFlat.lat,
        lng: this.props.selectedFlat.lng
      }
    }
    return(
      <div className='inner-container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAQUvoV-QIr-Ny9VhIPuqSY3S0XjRjf6vE' }}
          center={center}
          zoom={9}
        >
        {this.props.flats.map((flat) => {
          return(
            <div key={flat.id}>
              <Marker
                lat={flat.lat}
                lng={flat.lng}
                price={flat.price}
                priceCurrency={flat.priceCurrency}
                selected={flat === this.props.selectedFlat}
                />
            </div>
        );
        })}
        </GoogleMapReact>
      </div>
    );
  }
}


export default Map;
