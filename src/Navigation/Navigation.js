import React from 'react';
import AuthNavigation from "./AuthNavigation";
import NonAuthNavigation from "./NonAuthNavigation";

const Navigation = ({ authUser, doSignOut }) =>
    <div>
        { authUser
            ? <AuthNavigation doSignOut={doSignOut}/>
            : <NonAuthNavigation/>
        }
    </div>;



export default Navigation;


