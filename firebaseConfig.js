// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3UU4aPDxS4F7x21w8h7XGXZFcIt3yo5M",
    authDomain: "researchpublication-ce368.firebaseapp.com",
    projectId: "researchpublication-ce368",
    storageBucket:"researchpublication-ce368.appspot.com",
    messagingSenderId: "298733278048",
    appId:  "1:298733278048:web:c8f9a8c3d5f5f0f0550405",
    measurementId: "G-ZVNJMTPW00"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;