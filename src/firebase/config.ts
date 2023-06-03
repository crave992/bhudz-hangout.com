import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTAM1j23nqyGmPVXk7mFGcbYmXHD33Rok",
  authDomain: "hangout-b9708.firebaseapp.com",
  databaseURL: "https://hangout-b9708-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hangout-b9708",
  storageBucket: "hangout-b9708.appspot.com",
  messagingSenderId: "289487710198",
  appId: "1:289487710198:web:4511590019bdf9efca49d7",
  measurementId: "G-Z4R2K9C1YL"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();