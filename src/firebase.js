import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAqlBhrDYpk_5zXPz9JuKue8tbPAiQ-J2c",
    authDomain: "checkin-app-255d2.firebaseapp.com",
    databaseURL: "https://checkin-app-255d2.firebaseio.com",
    projectId: "checkin-app-255d2",
    storageBucket: "gs://checkin-app-255d2.appspot.com",
    messagingSenderId: "421754550232"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const markersRef = firebase.database().ref('markers');
export const storageRef = firebase.storage().ref();
