// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQtDP4ZTuIJU6ucPOkaG18iHblU4ad4c4",
  authDomain: "ebuddy-db.firebaseapp.com",
  databaseURL: "https://ebuddy-db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ebuddy-db",
  storageBucket: "ebuddy-db.appspot.com",
  messagingSenderId: "103271493132",
  appId: "1:103271493132:web:9fe951c0f80fca34ad4829",
  measurementId: "G-ZT7WZGS99H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();