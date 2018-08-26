import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
    input: {
        display: 'none',
    },
    button: {
        marginTop: 2*theme.spacing.unit,
    },
});

const defaultState = {
    title: '',
    description: '',
    rating: null,
    photos: [],
};

class CheckInDialog extends React.Component {
    state = defaultState;

    handleChange = fieldName => event => {
        this.setState({
            [fieldName]: event.target.value,
        });
    };

    handleSave = () => {
        this.props.handleClose();
    };

    render() {
        const { classes } = this.props;

        return (
            <Dialog
                open={this.props.isOpen}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Check in</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className={classes.container}>
                        <TextField
                            required
                            id="title"
                            label="Title"
                            className={classes.textField}
                            value={this.state.title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                        />

                        <TextField
                            required
                            id="description"
                            label="Description"
                            className={classes.textField}
                            value={this.state.description}
                            onChange={this.handleChange('description')}
                            margin="normal"
                        />

                        <Select
                            displayEmpty
                            value={this.state.rating}
                            onChange={this.handleChange('rating')}
                            name="rating"
                            className={classes.textField}
                        >
                            <MenuItem value="" disabled>
                                Rate this place
                            </MenuItem>

                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>

                        <input
                            multiple
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            type="file"
                            onChange={this.handleChange('photos')}
                        />

                        <label htmlFor="contained-button-file">
                            <Button variant="contained" component="span" className={classes.button}>
                                Upload photos
                            </Button>
                        </label>
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSave} color="primary" autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(CheckInDialog);
