import {put, takeEvery} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {closeDialog} from '../actionCreators/directCalls'
import {markersRef} from "../firebase";

import * as asyncActionTypes from '../actionTypes/async'

function* submitData({title, description, rating, lat, lng}) {
    try {
        yield markersRef.push({title, description, rating, lat, lng});
        yield put(closeDialog());

    } catch (e) {
        toast.error(e.message);
    }
}

export function* asyncFlow() {
    yield takeEvery(asyncActionTypes.SUBMIT_DATA, submitData);
}
