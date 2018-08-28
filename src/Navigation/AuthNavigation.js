import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import {Link} from "react-router-dom";
import * as routes from "../constants/routes";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import {withStyles} from "@material-ui/core";
import AccountIcon from '@material-ui/icons/AccountCircle';
import LandingIcon from '@material-ui/icons/FlightLand';
import SignOutIcon from '@material-ui/icons/Eject';
import HomeIcon from '@material-ui/icons/Home';

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

function AuthNavigation(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Landing">
                        <Link to={routes.LANDING}><LandingIcon /></Link>
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Landing
                    </Typography>

                    <IconButton className={classes.menuButton} color="inherit" aria-label="Home">
                        <Link to={routes.HOME}><HomeIcon /></Link>
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Home
                    </Typography>

                    <IconButton className={classes.menuButton} color="inherit" aria-label="Account">
                        <Link to={routes.ACCOUNT}><AccountIcon /></Link>
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Account
                    </Typography>

                    <IconButton onClick={props.doSignOut} className={classes.menuButton} color="inherit" aria-label="SignOut">
                        <SignOutIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Sign Out
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(AuthNavigation);
