// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCvrLhOAsZAb4a23LOd43w6Vu7XI1Bodo",
    authDomain: "car-doctor-99c85.firebaseapp.com",
    projectId: "car-doctor-99c85",
    storageBucket: "car-doctor-99c85.appspot.com",
    messagingSenderId: "535171664059",
    appId: "1:535171664059:web:372261cec0c0fb07e4c19e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app