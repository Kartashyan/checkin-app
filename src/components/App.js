import React, { Component } from 'react';
import './App.css';
import CheckInDialog from './CheckInDialog';
import Map from "../containers/MapContainer";
import {submitData} from "../actionCreators/asyncCalls";
import {firebaseApp} from "../firebase";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            isSignin: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleCheckInDialogClose = this.handleCheckInDialogClose.bind(this);
    }

    componentDidMount() {
        firebaseApp.auth().onAuthStateChanged(user=> {
            if(user){
                this.setState({isSignin: true});
            }
            else {
                this.setState({isSignin: false})
            }
        });
    }

    handleClick() {
        this.setState({
            isCheckInDialogOpen: true,
        });
    };

    handleCheckInDialogClose() {
        this.props.closeDialog();
    };

    render() {
        return (
            <div className="App">
                <CheckInDialog
                    isOpen={this.props.isCheckInDialogOpen}
                    handleClose={this.handleCheckInDialogClose}
                    lat={this.props.lat}
                    lng={this.props.lng}
                    submitData={this.props.submitData}
                />
                {!this.isSignin && <Map/>}

                <button onClick={this.handleClick}>getUsers</button>
            </div>
        );
    }
}
