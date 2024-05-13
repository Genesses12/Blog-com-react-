 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZNWcsgGpsN4GssnVWndfIQwL6rvhqm_s",
  authDomain: "miniblog-cec87.firebaseapp.com",
  projectId: "miniblog-cec87",
  storageBucket: "miniblog-cec87.appspot.com",
  messagingSenderId: "77630975481",
  appId: "1:77630975481:web:159e3247cde040ee1d2128"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
