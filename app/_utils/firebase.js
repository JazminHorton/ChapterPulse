// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYesdxohurezxCW8IHgBX3zFNY1vC0j4g",
  authDomain: "chapterpulse-2c4b3.firebaseapp.com",
  projectId: "chapterpulse-2c4b3",
  storageBucket: "chapterpulse-2c4b3.appspot.com",
  messagingSenderId: "229336914869",
  appId: "1:229336914869:web:ec9923eaef0321577bd7fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);