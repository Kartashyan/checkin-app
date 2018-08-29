import React, { PureComponent } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {markersRef} from "../firebase";


export class MapContainer extends PureComponent {
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
       const {title, description, rating} = e;
        this.props.showMarkerInfo(title, description, rating);
        console.log(e);
    }

    componentDidMount() {
        markersRef.on("value", (snap) => {
            if(snap.val()) {
            const markers = Object.values(snap.val());
            markers.length && this.props.setMarkers(markers);
            }
        });
    }

    componentWillUnmount() {
        markersRef.off();
    }

    get showMarkers() {
        return this.props.markers.map((marker, index) => {
            return <Marker
                onClick={this.onMarkerClick}
                key={index * marker.lat}
                title={marker.title}
                description={marker.description}
                rating={marker.rating}
                position={{lat: marker.lat, lng: marker.lng}} />
        })
    }

    onMapClick(mapProps, map, clickEvent) {
        const {lat, lng} = clickEvent.latLng;
        this.props.onMapClick(lat(), lng());/*todo change name*/
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
