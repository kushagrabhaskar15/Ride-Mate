// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFozrC8uN3zgszGsrmGLxRBY3ThVuzcOk",
  authDomain: "ridemate-166e8.firebaseapp.com",
  projectId: "ridemate-166e8",
  storageBucket: "ridemate-166e8.firebasestorage.app",
  messagingSenderId: "1067817333874",
  appId: "1:1067817333874:web:cad1431ab9a0d5e9a2feeb",
  measurementId: "G-WEKYV73KS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, analytics, auth};