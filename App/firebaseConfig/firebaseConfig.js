// require('dotenv').config()
// console.log(process.env)

// import 'dotenv/config' 
// import express from 'express'

import firebase from "firebase";

var firebaseConfig = {
  // apiKey: `${process.env.API_KAY}`,
  // authDomain: `${process.env.AUTH_DOMAIN}`,
  // projectId: `${process.env.PROJECT_ID}`,
  // storageBucket: `${process.env.STORAGE_BUCKET}`,
  // messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
  // appId: `${process.env.APPID}`,
  // measurementId: `${process.env.MESSUREMENT_ID}`,
  apiKey: "AIzaSyAr0GICqE1qYvJ0OKxPUZgGHWIVZcsVHxw",
  authDomain: "trainee-challinge.firebaseapp.com",
  projectId: "trainee-challinge",
  storageBucket: "trainee-challinge.appspot.com",
  messagingSenderId: "511497279876",
  appId: "1:511497279876:web:2be183aa2d073328ca25d1",
  measurementId: "G-TC76CMZE3Y"
};

firebase.initializeApp(firebaseConfig);

export default firebase