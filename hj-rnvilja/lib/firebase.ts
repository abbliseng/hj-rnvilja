import firebase from 'firebase/compat/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBlPAX7PpL1ha60r1NaHSZavmPEW25uT3M",
    authDomain: "hj-rnvilja.firebaseapp.com",
    projectId: "hj-rnvilja",
    storageBucket: "hj-rnvilja.appspot.com",
    messagingSenderId: "613608641178",
    appId: "1:613608641178:web:8b29a44829eff9edd80523",
    measurementId: "G-K4V1CGK4WX"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();