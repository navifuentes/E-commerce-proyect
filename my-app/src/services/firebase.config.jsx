// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm5KDJaStLVY6HTMoiGOzlRMRPtg3FQrU",
  authDomain: "proyecto-react-43185.firebaseapp.com",
  projectId: "proyecto-react-43185",
  storageBucket: "proyecto-react-43185.appspot.com",
  messagingSenderId: "963648345793",
  appId: "1:963648345793:web:6627cc86942f3dd15be640",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
