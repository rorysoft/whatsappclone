import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBc9sXiAGOl8ICEOXxWA2Dmk0wxqYBlIu0",
  authDomain: "whatsappcloners.firebaseapp.com",
  projectId: "whatsappcloners",
  storageBucket: "whatsappcloners.appspot.com",
  messagingSenderId: "194555741504",
  appId: "1:194555741504:web:a5dd66c20178d1f88fa6a5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
