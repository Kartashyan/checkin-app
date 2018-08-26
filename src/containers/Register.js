import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import {getUsers, signIn, signUp} from "../actionCreators/asyncCalls";
import Register from "../components/Register"
const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        signUp
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
