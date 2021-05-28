import firebase from 'firebase/app'
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyC_uHNqwPzaZS09BiZ5uCs4GALJt-fY2lQ",
  authDomain: "josmaotleds.firebaseapp.com",
  projectId: "josmaotleds",
  storageBucket: "josmaotleds.appspot.com",
  messagingSenderId: "573717147815",
  appId: "1:573717147815:web:2dc13d0b72642abb39ab82",
  measurementId: "G-2VS237W3PZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()