import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/App';
import {getUsers, submitData} from "../actionCreators/asyncCalls";
import {closeDialog} from "../actionCreators/directCalls";

const mapStateToProps = (state, ownProps) => {
    return {
        isCheckInDialogOpen: state.checkinDialog.isCheckInDialogOpen,
        lat: state.checkinDialog.lat,
        lng: state.checkinDialog.lng,
        markers: state.markers
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        getUsers,
        submitData,
        closeDialog
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
