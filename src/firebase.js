import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fp-tcc.firebaseapp.com",
  projectId: "fp-tcc",
  storageBucket: "fp-tcc.appspot.com",
  messagingSenderId: "581630012035",
  appId: "1:581630012035:web:1ea2698d370ae4d767c9b6",
  measurementId: "G-8FWWHFTBD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

// const analytics = getAnalytics(app);