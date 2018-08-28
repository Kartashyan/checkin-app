import {put, takeEvery} from 'redux-saga/effects';
import {closeDialog, setMarkers} from '../actionCreators/directCalls'
import {firebaseApp, markersRef} from "../firebase";
import { toast } from 'react-toastify';

import * as asyncActionTypes from '../actionTypes/async'
import asyncGetMarkers from "../helpers/dbHelper";

function* submitData({title, description, rating, lat, lng}) {
    try {
        yield markersRef.push({title, description, rating, lat, lng});
        yield put(closeDialog());

    } catch (e) {
        toast.error(e.message);
    }
}

function* getMarkers() {
    try {
        const markers = yield asyncGetMarkers();
        if(markers.length > 0) {
            yield put(setMarkers(markers));
        }
    } catch (e) {
        toast.error(e.message);
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* asyncFlow() {
    yield takeEvery(asyncActionTypes.SUBMIT_DATA, submitData);
    // yield takeLatest(asyncActionTypes.GET_MARKERS, getMarkers);
}
