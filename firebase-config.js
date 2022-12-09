// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB78i7WsOrWDXL94AroDbwSZa6e19Gldx0",
  authDomain: "formation-b408d.firebaseapp.com",
  projectId: "formation-b408d",
  storageBucket: "formation-b408d.appspot.com",
  messagingSenderId: "695221443649",
  appId: "1:695221443649:web:7a653a096de15cf9b67ac0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };