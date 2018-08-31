import React, { PureComponent } from 'react';
import './App.css';
import CheckInDialog from './CheckInDialog';
import CardDialog from './CardDialog';
import Map from "../containers/MapContainer";

export default class Home extends PureComponent {
    constructor() {
        super();
        this.state = {
            isSignin: false
        };
    }

    render() {
        return (
            <div className="App">
                <CheckInDialog
                    isOpen={this.props.isCheckInDialogOpen}
                    handleClose={this.props.closeDialog}
                    lat={this.props.lat}
                    lng={this.props.lng}
                    submitData={this.props.submitData}
                />
                <CardDialog
                    isOpen={this.props.isCardDialogOpen}
                    handleClose={this.props.closeCardDialog}
                    title={this.props.cardTitle}
                    description={this.props.cardDescription}
                    photos={this.props.cardPhotos}
                    rating={this.props.cardRating}
                />
                <Map showMediaCard={this.props.showMarkerInfo}/>
            </div>
        );
    }
}
