import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from "./Navigation/Navigation";
import * as routes from "./constants/routes";
import LandingPage from "./pages/Landing";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import PasswordForgetPage from "./pages/PwForget";
import HomePage from "./pages/Home";
import AccountPage from "./pages/Account";
import {firebaseApp} from "./firebase";


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };

        this.doSignOut = this.doSignOut.bind(this);
    }

    componentDidMount() {
        firebaseApp.auth().onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        });
    }

    doSignOut() {
        firebaseApp.auth().signOut().catch(e => console.log(e.message))
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation authUser={this.state.authUser} doSignOut = {this.doSignOut}/>
                    <Route
                        exact path={routes.LANDING}
                        component={LandingPage}
                    />
                    <Route
                        exact path={routes.SIGN_UP}
                        component={SignUpPage}
                    />
                    <Route
                        exact path={routes.SIGN_IN}
                        component={SignInPage}
                    />
                    <Route
                        exact path={routes.PASSWORD_FORGET}
                        component={PasswordForgetPage}
                    />
                    <Route
                        exact path={routes.HOME}
                        component={HomePage}
                    />
                    <Route
                        exact path={routes.ACCOUNT}
                        component={AccountPage}
                    />
                </div>
            </Router>
        );
    }
}
