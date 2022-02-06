// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCzDhHQpD8dZRv9QKeB-IXFS-13-25NHE",
  authDomain: "cofinder-70b4f.firebaseapp.com",
  databaseURL: "https://cofinder-70b4f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cofinder-70b4f",
  storageBucket: "cofinder-70b4f.appspot.com",
  messagingSenderId: "398227697754",
  appId: "1:398227697754:web:4eb96daebe777d4339e863",
  measurementId: "G-EN238YMP3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export {app, db }