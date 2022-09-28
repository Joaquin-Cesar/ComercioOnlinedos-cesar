// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxGpbJj-E6UYzaOOcX0xMViOxP2yAwSsk",
  authDomain: "e-commerce-26ec3.firebaseapp.com",
  projectId: "e-commerce-26ec3",
  storageBucket: "e-commerce-26ec3.appspot.com",
  messagingSenderId: "173993473478",
  appId: "1:173993473478:web:a7355a2a7f341036fdaec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Base de datos
export const db = getFirestore(app)

