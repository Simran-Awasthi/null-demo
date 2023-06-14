// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsg32XrnTH9VLfDg8y904EjNwhLt8HRiQ",
  authDomain: "todomanager-1d004.firebaseapp.com",
  projectId: "todomanager-1d004",
  storageBucket: "todomanager-1d004.appspot.com",
  messagingSenderId: "637735443140",
  appId: "1:637735443140:web:489c326dafca2add638791",
  measurementId: "G-8F87046DCF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
export {db, auth , googleProvider}
