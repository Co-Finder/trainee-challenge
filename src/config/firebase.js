export * from '@firebase/app';

const firebaseConfig = {
  apiKey: "",
  authDomain: "start-cooking-f98b0.firebaseapp.com",
  projectId: "start-cooking-f98b0",
  storageBucket: "start-cooking-f98b0.appspot.com",
  messagingSenderId: "817320232867",
  appId: "1:817320232867:web:620da132aadc07a06a7c16",
  measurementId: "G-0VDRLTMMGH"
};

firebase.initializeApp(firebaseConfig);

export default firebase