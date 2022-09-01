import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import Data from "../data/Data";

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

export async function saveProductsToFIrebase() {
  const collectionProducts = collection(firestoreDB, "productos")

  for (let item of Data) {
    const docref = await addDoc(collectionProducts, item);
    console.log("documento crado con id:", docref.id)
  }
}


export default firestoreDB