import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {markersRef} from "../firebase";


export class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
            lat: null,
            lng: null,
        };
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
    }

    onMarkerClick(e) {

        console.log(e);
    }

    componentDidMount() {
        markersRef.on("value", (snap) => {
            const markers = Object.values(snap.val());
            if(markers.length > 0) {
                this.props.setMarkers(markers);
            }
        });
    }

    get showMarkers() {
        return this.props.markers.map((marker, index) => {
            return <Marker
                title={marker.title}
                key={index * marker.lat}
                onClick={this.onMarkerClick}
                name={marker.title}
                position={{lat: marker.lat, lng: marker.lng}} />
        })
    }

    onMapClick(mapProps, map, clickEvent) {
        const {lat, lng} = clickEvent.latLng;
        this.props.onMarkerClick(lat(), lng());/*todo change name*/
        this.setState({
            lat: lat(),
            lng: lng(),
        });
        console.log('onMapClick: ', mapProps, map, clickEvent);
    }

    render() {
        const style = {
            width: '100%',
            height: '90%',
        };
        return (
            <div className='map-wrapper'>
                <Map google={this.props.google}
                     style={style}
                     onClick={this.onMapClick}
                     zoom={4}>
                {this.showMarkers}
                </Map>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDbtbAJ3V2p5Z8DKVh1IYwKED3AJXGjGk8'
})(MapContainer)
