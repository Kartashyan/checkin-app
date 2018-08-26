import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import {getUsers, signIn} from "../actionCreators/asyncCalls";
import Login from "../components/Login"
const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        signIn
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
