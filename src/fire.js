import firebase from "firebase";
const config = {
    apiKey: "AIzaSyAGm_1L0_xQw-WqbUH350cHvYSBtTS4JaM",
    authDomain: "the-socializing-corner.firebaseapp.com",
    databaseURL: "https://the-socializing-corner.firebaseio.com",
    projectId: "the-socializing-corner",
    storageBucket: "the-socializing-corner.appspot.com",
    messagingSenderId: "699291868957",
    appId: "1:699291868957:web:1a8f8b1d3e747187878bf4",
    measurementId: "G-PSRML904HK"
};
const fire = firebase.initializeApp(config);
export default fire;