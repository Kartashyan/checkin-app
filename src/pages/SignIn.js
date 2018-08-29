import React, { PureComponent } from 'react';
import {Link, withRouter} from 'react-router-dom';

import * as routes from '../constants/routes';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {firebaseApp} from '../firebase';
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Typography from "@material-ui/core/Typography/Typography";

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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        width: 400,
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    textField: {
        minWidth: 300,
    },
    button: {
        marginTop: 2*theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends PureComponent {
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
        const { classes } = this.props;

        const { email, password, error } = this.state;

        // const isInvalid = password === '' || email === '';

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
                                value={password}
                                autoComplete="current-password"
                                onChange={this.handleChange('password')}
                                margin="normal"
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={this.onSubmit}>
                                Login
                            </Button>

                            <Typography>
                                Don't have an account?{'  '}<Link to={routes.SIGN_UP}>Sign Up</Link>
                            </Typography>
                            <Typography>
                                <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
                            </Typography>

                            { error && <p>{error.message}</p> }
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

const StyledSignInForm = withStyles(styles)(SignInForm);

const SignInPage = ({ history }) =>
    <div>
        <StyledSignInForm history={history} />
    </div>;

export default withRouter(SignInPage);

export {
    SignInForm,
};
