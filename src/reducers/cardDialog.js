import * as actionTypes from '../actionTypes/direct';

const initialState = {
    cardTitle: '',
    cardDescription: '',
    cardRating: 0,
    isCardDialogOpen: false
};

export default (prevState = initialState, {type, ...rest}) => {
    switch (type) {
        case actionTypes.SHOW_MARKER_INFO:
            return {...prevState, cardTitle: rest.title, cardDescription: rest.description, cardRating: rest.rating, isCardDialogOpen: true};
        case actionTypes.CLOSE_CARD_DIALOG:
            return {
                ...prevState,
                ...initialState
            };
        default:
            return prevState;
    }
}
