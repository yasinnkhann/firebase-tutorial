import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaircZlkZgXq4fQz9c1k55o5zp1FQgCYw",
  authDomain: "fir-tutorial-7f620.firebaseapp.com",
  projectId: "fir-tutorial-7f620",
  storageBucket: "fir-tutorial-7f620.appspot.com",
  messagingSenderId: "93942516749",
  appId: "1:93942516749:web:34d6bb5f243b368b401944",
  measurementId: "G-LMNJMFRWJZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();