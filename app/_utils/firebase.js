// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf2Mla8RyLna2BbJmxECun7aGTAE7Q3Cg",
  authDomain: "chapterpulse.firebaseapp.com",
  projectId: "chapterpulse",
  storageBucket: "chapterpulse.appspot.com",
  messagingSenderId: "141862302202",
  appId: "1:141862302202:web:3d1e8d651ea4b58a70f443",
  measurementId: "G-ZMKX12Z7Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);