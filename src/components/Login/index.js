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
        width: 200,
    },
});

class TextFields extends React.Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
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
                    value={this.state.name}
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

                <Button variant="contained" color="primary" className={classes.button}>
                    Login
                </Button>
            </form>
        );
    }
}

export default withStyles(styles)(TextFields);
