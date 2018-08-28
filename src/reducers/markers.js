import * as actionTypes from '../actionTypes/direct';
import _ from 'lodash';

const initialState = [];

export default (prevState = initialState, {type, markers}) => {
    switch (type) {
        case actionTypes.SET_MARKERS:
        const deepArray = _.cloneDeep(markers);
            return deepArray;
        default:
            return prevState;
    }
}
