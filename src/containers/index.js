import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import {getUsers} from "../actionCreators/asyncCalls";

const mapStateToProps = (state, ownProps) => {
    return {userName: state.user.userName};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        getUsers
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
