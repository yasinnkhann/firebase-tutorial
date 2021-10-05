import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJmXBmERUgvOB-DpaswD7-G0BL_AWTgZs",
  authDomain: "fir-tutorial-33f43.firebaseapp.com",
  projectId: "fir-tutorial-33f43",
  storageBucket: "fir-tutorial-33f43.appspot.com",
  messagingSenderId: "687591990264",
  appId: "1:687591990264:web:e8648aaaa0d1c587fcec0d",
  measurementId: "G-ES04ELT5FL"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();