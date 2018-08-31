import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from "@material-ui/core/Dialog/Dialog";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import SwipeableStepper from "../Slider";

const styles = {
    container: {
        position: 'absolute',
        zIndex: '1'
    },
    card: {
        maxWidth: 345,
    },
    rating: {
        marginTop: 20,
    },
    cardContent: {
        flexGrow: 1,
        // maxWidth: 345,
        // minHeight: 200,
        // minWidth: 300,
    },
    description: {
        minHeight: 100,
    },
    media: {
        height: 140,
    },
};

class MediaCard extends React.PureComponent {

    render() {
        const { classes, title, description, rating, photos, isOpen} = this.props;
        return (
            <Dialog
                open={isOpen}
                // onClose={this.handleClose}
                className={classes.container}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <SwipeableStepper imageSteps={photos}/>
                        {/*<CardMedia*/}
                            {/*className={classes.media}*/}
                            {/*image={photos[0]}*/}
                            {/*title="Marked photos"*/}
                        {/*/>*/}
                        <Typography gutterBottom variant="headline" component="h2">
                            {title}
                        </Typography>
                        <Typography>
                            {description}
                        </Typography>
                        <CssBaseline />
                        <Typography gutterBottom component="p" className={classes.rating}>
                            Rating: {rating}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </CardActions>
                </Card>
            </Dialog>
        );
    }
}

export default withStyles(styles)(MediaCard);
