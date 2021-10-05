import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2aTmWeCBbwHrA-sP-8pRM5ToT7BxS_LU",
  authDomain: "fir-tutorial-87432.firebaseapp.com",
  projectId: "fir-tutorial-87432",
  storageBucket: "fir-tutorial-87432.appspot.com",
  messagingSenderId: "684136126631",
  appId: "1:684136126631:web:f145797b89377c0f232382",
  measurementId: "G-DK15XFGLS0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();