import firebase from 'firebase/app'
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyA3xcAXNdbRm2s4UwiifASS0n8O--l-t-w",
    authDomain: "josmaotlibrary.firebaseapp.com",
    databaseURL: "https://josmaotlibrary-default-rtdb.firebaseio.com",
    projectId: "josmaotlibrary",
    storageBucket: "josmaotlibrary.appspot.com",
    messagingSenderId: "526996899324",
    appId: "1:526996899324:web:43b8d842f3d698451ade79",
    measurementId: "G-SMJTVJ19SB"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()