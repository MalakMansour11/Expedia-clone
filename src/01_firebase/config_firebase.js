// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClA06_1rvT3X3yu8bg2mFyzmbTLFQnL7A",
  authDomain: "expedia-clone-malak-mansour.firebaseapp.com",
  projectId: "expedia-clone-malak-mansour",
  storageBucket: "expedia-clone-malak-mansour.firebasestorage.app",
  messagingSenderId: "938607109157",
  appId: "1:938607109157:web:1a3bf859870d578e088bcc",
  measurementId: "G-GK3K06HR5N"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

export default firebase_app;