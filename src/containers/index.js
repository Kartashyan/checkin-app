import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/App';
import {getUsers, submitData} from "../actionCreators/asyncCalls";
import {closeCardDialog, closeDialog, showMarkerInfo} from "../actionCreators/directCalls";

const mapStateToProps = (state, ownProps) => {
    return {
        isCheckInDialogOpen: state.checkinDialog.isCheckInDialogOpen,
        isCardDialogOpen: state.cardDialog.isCardDialogOpen,
        cardTitle: state.cardDialog.cardTitle,
        cardDescription: state.cardDialog.cardDescription,
        cardRating: state.cardDialog.cardRating,
        cardPhotos: state.cardDialog.cardPhotos,
        lat: state.checkinDialog.lat,
        lng: state.checkinDialog.lng,
        markers: state.markers
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        getUsers,
        submitData,
        closeDialog,
        closeCardDialog,
        showMarkerInfo
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
