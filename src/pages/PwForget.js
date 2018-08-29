import React, { PureComponent } from 'react';

import { firebaseApp } from '../firebase';

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetForm extends PureComponent {
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
        const { email } = this.state;

        firebaseApp.auth().sendPasswordResetEmail(email)
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
            email,
            error,
        } = this.state;

        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    type="text"
                    placeholder="Email Address"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
                </button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

const PasswordForgetPage = () =>
    <div>
        <PasswordForgetForm />
    </div>;

export default PasswordForgetPage;

export {
    PasswordForgetForm,
};
