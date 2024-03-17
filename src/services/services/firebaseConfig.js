import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0E3Ns-0vZi-z0LjTQl5SZKPvzZsY8Egw",
  authDomain: "ecommerce-reactjs-922b8.firebaseapp.com",
  projectId: "ecommerce-reactjs-922b8",
  storageBucket: "ecommerce-reactjs-922b8.appspot.com",
  messagingSenderId: "717672378882",
  appId: "1:717672378882:web:e9c61da84f8a2d859fad1b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)