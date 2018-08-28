import * as actionTypes from '../actionTypes/direct'

export function onMarkerClick(lat, lng) {
    return {type: actionTypes.ON_MARKER_CLICK, lat, lng, isCheckInDialogOpen: true}
}
export function onMapClick() {
    return {type: actionTypes.ON_MARKER_CLICK, isCheckInDialogOpen: true}
}
export function closeDialog() {
    return {type: actionTypes.CLOSE_DIALOG}
}

export function setMarkers(markers) {
    return {type: actionTypes.SET_MARKERS, markers}
}
