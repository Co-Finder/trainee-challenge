import firebase from "firebase"
import "firebase/storage"

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaZ-tSlZVENR5x9efbznsCgYgddpma-PU",
  authDomain: "start-cooking-f98b0.firebaseapp.com",
  projectId: "start-cooking-f98b0",
  storageBucket: "start-cooking-f98b0.appspot.com",
  messagingSenderId: "817320232867",
  appId: "1:817320232867:web:ee7ac2db423e67c56a7c16",
  measurementId: "G-6F43QGSSZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = firebase.firestore();
export default database;