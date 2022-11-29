// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMafY8XKzWZ8TnDGmWb8FasZD4rTSqMGA",
    authDomain: "reactjs-coderhouse-16ea8.firebaseapp.com",
    projectId: "reactjs-coderhouse-16ea8",
    storageBucket: "reactjs-coderhouse-16ea8.appspot.com",
    messagingSenderId: "372311680237",
    appId: "1:372311680237:web:1f7aca793f052738cb98e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)