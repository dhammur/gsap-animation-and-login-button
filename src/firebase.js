import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "process.env.REACT_APP_FIREBASE_KEY",
  // authDomain: "chat-ab746.firebaseapp.com",
  // projectId: "chat-ab746",
  // storageBucket: "chat-ab746.appspot.com",
  // messagingSenderId: "901216368405",
  // appId: "1:901216368405:web:8ec942ee51611df5c49b1c",

  apiKey: "AIzaSyBurcUA67W6FsEsK5lQe2TQys48b2B7824",
  authDomain: "myapp-b6d9b.firebaseapp.com",
  projectId: "myapp-b6d9b",
  storageBucket: "myapp-b6d9b.appspot.com",
  messagingSenderId: "598907026453",
  appId: "1:598907026453:web:3886ac2f7980af746ca21c",
  measurementId: "G-MZNH4D9YM2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
