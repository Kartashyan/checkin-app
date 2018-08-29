import React, { PureComponent } from 'react';

import { firebaseApp } from '../firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends PureComponent {
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
        const { passwordOne } = this.state;

        firebaseApp.auth().currentUser.updatePassword(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({error});
            });

        event.preventDefault();
    }

    render() {
        const {
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={passwordOne}
                    onChange={this.handleChange(passwordOne)}
                    type="password"
                    placeholder="New Password"
                />
                <input
                    value={passwordTwo}
                    onChange={this.handleChange(passwordTwo)}
                    type="password"
                    placeholder="Confirm New Password"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
                </button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

export default PasswordChangeForm;
