import * as actionTypes from '../actionTypes/direct';

const initialState = {
    userName: '',
    age: ''
};

export default (prevState = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.TEST:
            return {...prevState, userName: payload.userName};
        default:
            return prevState;
    }
}
