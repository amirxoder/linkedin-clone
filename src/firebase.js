// import { initializeApp } from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZlgJeiiaDjBOpRnUEVp3Of6dD3useQJE",
  authDomain: "linkedin-clone-2d754.firebaseapp.com",
  projectId: "linkedin-clone-2d754",
  storageBucket: "linkedin-clone-2d754.appspot.com",
  messagingSenderId: "231775562748",
  appId: "1:231775562748:web:5810b84a87d88b30722079",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
