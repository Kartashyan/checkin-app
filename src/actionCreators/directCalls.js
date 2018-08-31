import * as actionTypes from '../actionTypes/direct'

export function onMapClick(lat, lng) {
    return {type: actionTypes.ON_MAP_CLICK, lat, lng, isCheckInDialogOpen: true}
}
export function onMarkerClick() {
    return {type: actionTypes.ON_MARKER_CLICK, isCheckInDialogOpen: true}
}

export function closeDialog() {
    return {type: actionTypes.CLOSE_DIALOG}
}

export function closeCardDialog() {
    return {type: actionTypes.CLOSE_CARD_DIALOG}
}

export function setMarkers(markers) {
    return {type: actionTypes.SET_MARKERS, markers}
}

export function showMarkerInfo(title, description, rating, photos) {
    return {type: actionTypes.SHOW_MARKER_INFO, title, description, rating, photos}
}
