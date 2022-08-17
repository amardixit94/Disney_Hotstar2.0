import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXO40ZHxKgYNwDnlh9rfFRyL_bvrr7-RY",
  authDomain: "disneyplus-clone-cf354.firebaseapp.com",
  projectId: "disneyplus-clone-cf354",
  storageBucket: "disneyplus-clone-cf354.appspot.com",
  messagingSenderId: "817671313986",
  appId: "1:817671313986:web:77ad86d62084c5d5b52bdb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;