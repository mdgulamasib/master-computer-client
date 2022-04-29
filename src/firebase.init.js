// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBshErWhJRzjFSu-N3xPqI--rHU3tC4pyg",
    authDomain: "master-computer-cff25.firebaseapp.com",
    projectId: "master-computer-cff25",
    storageBucket: "master-computer-cff25.appspot.com",
    messagingSenderId: "478277610804",
    appId: "1:478277610804:web:e50d04018e6a42faa00961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;