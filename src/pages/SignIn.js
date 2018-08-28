import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import {firebaseApp} from '../firebase';
import * as routes from '../constants/routes';
import {PasswordForgetLink} from "./PwForget";

const SignInPage = ({ history }) =>
    <div>
        <h1>SignIn</h1>
        <SignInForm history={history} />
        <PasswordForgetLink />
        <SignUpLink />
    </div>;

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };

        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(fieldName) {
        return event => {
            this.setState({
                [fieldName]: event.target.value,
            });
        }
    };

    onSubmit(event) {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState({error});
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={email}
                    onChange={this.handleChange('email')}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={password}
                    onChange={this.handleChange('password')}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign In
                </button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};
