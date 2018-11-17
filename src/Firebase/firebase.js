import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAxqwMGssVh44N9rnELFT0K_rBkpOsumwA",
    authDomain: "a2z-resources-auth.firebaseapp.com",
    databaseURL: "https://a2z-resources-auth.firebaseio.com",
    projectId: "a2z-resources-auth",
    storageBucket: "a2z-resources-auth.appspot.com",
    messagingSenderId: "1062186645589"
}

if(!firebase.apps.length) {
    firebase.initializeApp(config);
} 

const auth = firebase.auth()

export { auth };