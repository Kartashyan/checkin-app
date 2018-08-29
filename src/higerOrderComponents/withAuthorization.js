import React from "react";
import {firebaseApp} from "../firebase";

export default function withAuthorization(Component) {
    return class WithAuthorization extends React.PureComponent {
        constructor(){
            super();
            this.state = {
                isAuthUser: null,
                unsubscribe: null,
            }
        }
        componentDidMount() {
            const unsubscribe = firebaseApp.auth().onAuthStateChanged(authUser => {
                if (!authUser) {
                    this.setState({isAuthUser: null});
                    // this.props.history.push(routes.SIGN_IN);
                } else {
                    this.setState({isAuthUser: authUser.email});
                }
            });
            this.setState({unsubscribe})
        }

        componentWillUnmount() {
            this.state.unsubscribe();
        }

        render() {
            return (
                <div>
                    {this.state.isAuthUser ? <Component />
                        : (<div>
                            <p>Sorry, you are not authorized to view the current page.</p>
                            <p>Please sign in.</p>
                        </div>)}
                </div>
            );
        }
    }

}
