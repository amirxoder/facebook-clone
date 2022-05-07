import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import firebase from "firebase/compat/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOMAhmHnHw0chIkVi40lkkABwM7tlEDvQ",
  authDomain: "facebook-clone-20af5.firebaseapp.com",
  projectId: "facebook-clone-20af5",
  storageBucket: "facebook-clone-20af5.appspot.com",
  messagingSenderId: "535768501388",
  appId: "1:535768501388:web:1084a99601ee3e177f7fa9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
console.log(firebase.auth);

export { auth, provider };
export default db;
