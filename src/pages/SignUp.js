import React, {PureComponent} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Paper from "@material-ui/core/Paper/Paper";
import {withRouter} from 'react-router-dom';
import {withStyles} from "@material-ui/core";

import * as routes from "../constants/routes";
import {firebaseApp} from "../firebase";

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        width: 400,
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textField: {
        width: 300,
    },
    button: {
        marginTop: 2*theme.spacing.unit,
    },
});

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpForm extends PureComponent {
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
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;

        firebaseApp.auth().createUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState({error});
            });

        event.preventDefault();
    }

    render() {
        const {email, passwordOne, passwordTwo, error} = this.state;

        // const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                required
                                id="email"
                                label="Email"
                                className={classes.textField}
                                value={email}
                                type="email"
                                onChange={this.handleChange('email')}
                                margin="normal"
                            />

                            <TextField
                                required
                                id="password-input"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                value={passwordOne}
                                autoComplete="current-password"
                                onChange={this.handleChange('passwordOne')}
                                margin="normal"
                            />

                            <TextField
                                required
                                id="confirm-password-input"
                                label="Confirm Password"
                                className={classes.textField}
                                type="password"
                                value={passwordTwo}
                                autoComplete="current-password"
                                onChange={this.handleChange('passwordTwo')}
                                margin="normal"
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={this.onSubmit}
                            >
                                Register
                            </Button>

                            { error && <p>{error.message}</p> }

                        </form>
                    </Paper>
                </main>
                <CssBaseline />
            </React.Fragment>
        );
    }
}

const StyledSignUpForm = withStyles(styles)(SignUpForm);

const SignUpPage = ({ history }) =>
    <div>
        <StyledSignUpForm history={history} />
    </div>;

export default withRouter(SignUpPage);

export {
    SignUpForm,
};
