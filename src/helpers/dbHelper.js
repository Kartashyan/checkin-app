import {markersRef} from "../firebase";

export default function asyncGetMarkers() {
    return new Promise((resolve) => {
        markersRef.on("value", (snap) => {
            const markers = Object.values(snap.val());
            resolve(markers)
        });
    })
}
