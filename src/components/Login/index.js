import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textField: {
        width: 200,
    },
    button: {
        marginTop: 2*theme.spacing.unit,
    },
});

export class TextFields extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = fieladName => event => {
        this.setState({
            [fieladName]: event.target.value,
        });
    };

    handleSignIn = () => {
        const {email, password} = this.state;
        const {signIn} =this. props;
        console.log(this.props);
        signIn(email, password);
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    required
                    id="email"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
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
                    value={this.state.password}
                    autoComplete="current-password"
                    onChange={this.handleChange('password')}
                    margin="normal"
                />

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleSignIn}>
                    Login
                </Button>
            </form>
        );
    }
}

export default withStyles(styles)(TextFields);
