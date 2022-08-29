import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBYpyCrR8ewIeKEaO9cF7QXnoLiuq-fhjk",
  authDomain: "ecommerce-react-39b6c.firebaseapp.com",
  projectId: "ecommerce-react-39b6c",
  storageBucket: "ecommerce-react-39b6c.appspot.com",
  messagingSenderId: "848770466775",
  appId: "1:848770466775:web:b5a7c2f734ba6698498192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app)

export default firestoreDB