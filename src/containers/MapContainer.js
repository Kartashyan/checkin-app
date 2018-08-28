import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {signIn} from "../actionCreators/asyncCalls";
import Map from "../components/Map"
import {onMarkerClick, setMarkers} from "../actionCreators/directCalls";

const mapStateToProps = (state, ownProps) => {
    return {
        markers: state.markers
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        signIn,
        setMarkers,
        onMarkerClick
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);
