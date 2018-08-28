import * as actionTypes from '../actionTypes/async'

export function getUsers() {
    return {type: actionTypes.TEST}
}

export function signIn(email, password) {
    return {type: actionTypes.SIGN_IN, email, password}
}

export function signUp(email, password) {
    return {type: actionTypes.SIGN_UP, email, password}
}
export function submitData(title, description, rating, lat, lng) {
    return {type: actionTypes.SUBMIT_DATA, title, description, rating, lat, lng}
}

export function getMarkers() {
    return {type: actionTypes.GET_MARKERS, title: 1}
}
