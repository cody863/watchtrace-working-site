// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6tWFYuBgmS8jLObmUQpOTZy-9ncghA-w",
  authDomain: "visitortracker-e34a3.firebaseapp.com",
  projectId: "visitortracker-e34a3",
  storageBucket: "visitortracker-e34a3.firebasestorage.app",
  messagingSenderId: "196909954954",
  appId: "1:196909954954:web:1c3383dc991acdfee7fa73",
  measurementId: "G-P5P22YD9PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);