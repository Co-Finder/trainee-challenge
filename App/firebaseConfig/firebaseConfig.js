// require('dotenv').config()
// console.log(process.env)

// import 'dotenv/config' 
// import express from 'express'

import firebase from "firebase";

var firebaseConfig = {
  apiKey: `${process.env.API_KAY}`,
  authDomain: `${process.env.AUTH_DOMAIN}`,
  projectId: `${process.env.PROJECT_ID}`,
  storageBucket: `${process.env.STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
  appId: `${process.env.APPID}`,
  measurementId: `${process.env.MESSUREMENT_ID}`,
};

firebase.initializeApp(firebaseConfig);

export default firebase