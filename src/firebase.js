import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRA1SNZIjKW4BU-5yAupe3MwSyPYQMgKk",
  authDomain: "challenge-91043.firebaseapp.com",
  projectId: "challenge-91043",
  storageBucket: "challenge-91043.appspot.com",
  messagingSenderId: "772274687710",
  appId: "1:772274687710:web:7d26c9ba072427d8e53c4f",
  measurementId: "G-TDZ19R5HCY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
