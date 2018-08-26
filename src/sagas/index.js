import {rootUser} from './user'
import {all} from "redux-saga/effects";

export default function* rootSaga() {
    yield all([rootUser()])
}
