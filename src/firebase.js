import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBiRTPTwhoSzQWnzpqoln4HUCw7_hiMz94",
    authDomain: "rulletin-3a3e2.firebaseapp.com",
    databaseURL: "https://rulletin-3a3e2-default-rtdb.firebaseio.com",
    projectId: "rulletin-3a3e2",
    storageBucket: "rulletin-3a3e2.appspot.com",
    messagingSenderId: "229403294256",
    appId: "1:229403294256:web:37e4d126c4a4754ea58bf5",
    measurementId: "G-VV8S344BC3"
  };


export default firebase.initializeApp(firebaseConfig);