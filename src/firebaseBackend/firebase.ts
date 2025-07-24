// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiAmvGCJoBrEdKHNl3PtUAlE534QVnVe4",
  authDomain: "sunrise-school-eda65.firebaseapp.com",
  projectId: "sunrise-school-eda65",
  storageBucket: "sunrise-school-eda65.firebasestorage.app",
  messagingSenderId: "556202657567",
  appId: "1:556202657567:web:700df74ee78ddfb27e522a",
  measurementId: "G-REJB2PZMNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);