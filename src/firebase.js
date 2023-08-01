// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlnePX2ejitV-3Pv34BRKoWGZuOQ7RPd8",
  authDomain: "errortrackingtool.firebaseapp.com",
  projectId: "errortrackingtool",
  storageBucket: "errortrackingtool.appspot.com",
  messagingSenderId: "151201662447",
  appId: "1:151201662447:web:53ea05aefdf6c656d3a21a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
