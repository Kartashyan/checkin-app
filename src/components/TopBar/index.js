import React, {PureComponent} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import {firebaseApp} from "../../firebase";
import history from "../../history";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    menuLink: {
        marginRight: theme.spacing.unit,
    }
});

class ButtonAppBar extends PureComponent {
    constructor() {
        super();
        this.state = {
            isSignin: false
        };
        this.signOut = this.signOut.bind(this);
    }

    componentDidMount() {
        firebaseApp.auth().onAuthStateChanged(user=> {
            if(user){
                const {email} = user;
                // store.dispatch(logUser(email));
                this.setState({signin: true});
            }
            else {
                this.setState({signin: false})
            }
        });
    }

    componentDidUpdate() {
        firebaseApp.auth().onAuthStateChanged(user=> {
            if(user){
                const {email} = user;
                // store.dispatch(logUser(email));
                this.setState({signin: true});
            }
            else {
                this.setState({signin: false})
            }
        });
    }

    signOut() {
        firebaseApp.auth().signOut().then(function() {
            history.push('/signin');
            console.log('Signed Out');
        }, function(error) {
            console.error('Sign Out Error', error);
        });
    }

    render(){
        const { classes } = this.props;
        const { isSignin } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            News
                        </Typography>
                        {!isSignin ? (
                            <Button onClick={this.signOut} variant="outlined" color="inherit" className={classes.menuLink}>Sign Out</Button>
                        ) : (
                        [<Link to='/signin'>
                            <Button variant="outlined" color="inherit" className={classes.menuLink}>Sign In</Button>
                        </Link>,
                        <Link to='/signup'>
                            <Button variant="outlined" color="inherit" className={classes.menuLink}>Sign Up</Button>
                        </Link>]
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(ButtonAppBar);
