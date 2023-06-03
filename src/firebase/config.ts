import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAg15MnjCxo4nBx3z_2E0hYb7GywdVAVF0",
  authDomain: "bhudz-hangout-calleuno.firebaseapp.com",
  databaseURL: "https://bhudz-hangout-calleuno-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bhudz-hangout-calleuno",
  storageBucket: "bhudz-hangout-calleuno.appspot.com",
  messagingSenderId: "271343841690",
  appId: "1:271343841690:web:eb091c48fce266aca0ca23",
  measurementId: "G-81KJDLD4LQ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();