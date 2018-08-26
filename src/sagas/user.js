import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import {setUsers} from '../actionCreators/directCalls'

export function* testAsync() {
    yield delay(1000);
    yield put(setUsers());
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* rootUser() {
    yield takeEvery('ASYNC:TEST', testAsync)
}
