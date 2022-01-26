import firebase from "firebase";

var firebaseConfig = {
  apiKey: "",
  authDomain: "trainee-challinge.firebaseapp.com",
  projectId: "trainee-challinge",
  storageBucket: "trainee-challinge.appspot.com",
  messagingSenderId: "511497279876",
  appId: "1:511497279876:web:8edfa66f41ea6535ca25d1",
  measurementId: "G-4W7EZT9H7K",
};

firebase.initializeApp(firebaseConfig);

export default firebase