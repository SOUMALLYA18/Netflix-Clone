// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy1fnIKXk5jpW4iaqi7pEc4zGRBVEzp5M",
  authDomain: "netflix-clone-b5161.firebaseapp.com",
  projectId: "netflix-clone-b5161",
  storageBucket: "netflix-clone-b5161.appspot.com",
  messagingSenderId: "343019038906",
  appId: "1:343019038906:web:05f0fa1c5c56678ecdfa83",
  measurementId: "G-NW31X4TZTL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
