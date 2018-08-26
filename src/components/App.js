import React, { Component } from 'react';
import './App.css';
import CheckInDialog from './CheckInDialog';

class App extends Component {
    state = {
        isCheckInDialogOpen: false,
    };

    handleClick = () => {
        this.setState({
            isCheckInDialogOpen: true,
        });
    };

    handleCheckInDialogClose = () => {
        this.setState({
            isCheckInDialogOpen: false,
        });
    }

    render() {
        return (
            <div className="App">
                <CheckInDialog
                    isOpen={this.state.isCheckInDialogOpen}
                    handleClose={this.handleCheckInDialogClose}
                />

                <button onClick={this.handleClick}>getUsers</button>
            </div>
        );
    }
}

export default App;
