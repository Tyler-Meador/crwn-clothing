import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBncHmdHKJ92n_c5uDpJNeRNL0johY4fqU",
  authDomain: "crwn-db-7e64e.firebaseapp.com",
  projectId: "crwn-db-7e64e",
  storageBucket: "crwn-db-7e64e.appspot.com",
  messagingSenderId: "966641746562",
  appId: "1:966641746562:web:16fc45ec958051629dea9b",
  measurementId: "G-VXESGRLX9K",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
