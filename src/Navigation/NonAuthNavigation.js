import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import {Link} from "react-router-dom";
import * as routes from "../constants/routes";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import {withStyles} from "@material-ui/core";
import SignInIcon from '@material-ui/icons/Input';
import LandingIcon from '@material-ui/icons/FlightLand';

const styles = {
    root: {
        flexGrow: 0,
    },
    flex: {
        flexGrow: 0,
    },
    menuButton: {
        marginLeft: 80,
        marginRight: 5,
    },
};

function NonAuthNavigation(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="SignIn">
                        <Link to={routes.LANDING}><LandingIcon /></Link>
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Landing
                    </Typography>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="SignIn">
                        <Link to={routes.SIGN_IN}><SignInIcon /></Link>
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Sign In
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(NonAuthNavigation);
