import React, {PureComponent} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 300
    },
    textField: {
        width: 300,
        minHeight: 50,
    },
    selectField: {
        width: 300,
        minHeight: 50,
        marginTop: 16,
        marginBottom: 16,
    },
    input: {
        display: 'none',
    },
    button: {
        marginTop: 2*theme.spacing.unit,
    },
});

const INITIAL_STATE = {
        title: '',
        description: '',
        rating: 0,
        photos: [],
    };

class CheckInDialog extends PureComponent {
    constructor() {
        super();
        this.state = {...INITIAL_STATE};
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    handleChange(fieldName) {
        return event => {
            this.setState({
                [fieldName]: event.target.value,
            });
        }
    };

    handleSave() {
        const {lat, lng} = this.props;
        const {title, description, rating} = this.state;

        this.props.submitData(title, description, rating, lat, lng);

        this.setState(INITIAL_STATE);
    };

    render() {
        const { classes } = this.props;

        return (
            <Dialog
                open={this.props.isOpen}
                onClose={this.handleClose}
                className={classes.dialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Check in</DialogTitle>

                <DialogContent id="alert-dialog-description" className={classes.container}>
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
                            className={classes.selectField}
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
