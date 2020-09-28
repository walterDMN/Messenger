import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCsymKVG4nhGAfwMzCJtk_lIvZx3-IKA-8",
    authDomain: "messenger-4cf4a.firebaseapp.com",
    databaseURL: "https://messenger-4cf4a.firebaseio.com",
    projectId: "messenger-4cf4a",
    storageBucket: "messenger-4cf4a.appspot.com",
    messagingSenderId: "1093940742455",
    appId: "1:1093940742455:web:0de6ba7309fdb2378c32b2"
});

const db = firebaseApp.firestore();

export default db;