import * as actionTypes from '../actionTypes/async'

export function getUsers() {
    return {type: actionTypes.TEST}
}

export function signIn(email, password) {
    return {type: actionTypes.SIGN_IN, payload: {email, password}}
}

export function signUp(email, password) {
    return {type: actionTypes.SIGN_UP, payload: {email, password}}
}
