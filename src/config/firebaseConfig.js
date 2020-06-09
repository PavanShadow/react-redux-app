import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvWkD5o5oNfTgxHZyvAftjZey95IR1RKk",
    authDomain: "project-plan-3658a.firebaseapp.com",
    databaseURL: "https://project-plan-3658a.firebaseio.com",
    projectId: "project-plan-3658a",
    storageBucket: "project-plan-3658a.appspot.com",
    messagingSenderId: "348806147235",
    appId: "1:348806147235:web:5a6a5815fe670fe9ae2316",
    measurementId: "G-RHNZMXR8PE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;