// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjmg_kOLGKLYeCNDjdCRBfFR4oWGqYXpQ",
  authDomain: "advanced-ecommerce-75a0a.firebaseapp.com",
  projectId: "advanced-ecommerce-75a0a",
  storageBucket: "advanced-ecommerce-75a0a.firebasestorage.app",
  messagingSenderId: "776961082816",
  appId: "1:776961082816:web:1d8ba36e94c27e5e59f425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;