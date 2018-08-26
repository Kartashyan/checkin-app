import { delay } from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';
import {setUsers} from '../actionCreators/directCalls'
import {firebaseApp} from "../firebase";

import * as asyncActionTypes from '../actionTypes/async'

export function* testAsync() {
    yield delay(1000);
    yield put(setUsers());
}

function* signIn({payload: {email, password}}) {
    try {
        const response = yield firebaseApp.auth().signInWithEmailAndPassword(email, password);

    } catch (e) {
        console.log(e.message);
    }
}


function* signUp({payload: {email, password}}) {
    try {
        const response = yield firebaseApp.auth().createUserWithEmailAndPassword(email, password);
        console.log(response, 12312312313);
    } catch (e) {
        console.log(e.message);
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* rootUser() {
    yield takeEvery(asyncActionTypes.SIGN_IN, signIn);
    yield takeEvery(asyncActionTypes.SIGN_UP, signUp);
    yield takeEvery('ASYNC:TEST', testAsync);
}
