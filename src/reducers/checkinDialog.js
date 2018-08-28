import * as actionTypes from '../actionTypes/direct';

const initialState = {
    lat: null,
    lng: null,
    isCheckInDialogOpen: false
};

export default (prevState = initialState, {type, ...rest}) => {
    switch (type) {
        case actionTypes.ON_MARKER_CLICK:
            return {...prevState, lat: rest.lat, lng: rest.lng, isCheckInDialogOpen: rest.isCheckInDialogOpen};
        case actionTypes.CLOSE_DIALOG:
            return {
                ...prevState,
                lat: null,
                lng: null,
                isCheckInDialogOpen: false
            };
        default:
            return prevState;
    }
}
