// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA5c_bDhmK4nOa2uvxY8EJet3IAOSqh_K8",
  authDomain: "computer-parts-manufactu-ed97b.firebaseapp.com",
  projectId: "computer-parts-manufactu-ed97b",
  storageBucket: "computer-parts-manufactu-ed97b.appspot.com",
  messagingSenderId: "270111759701",
  appId: "1:270111759701:web:245ab8b59829bd0449a3dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;