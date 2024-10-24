// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d451b.firebaseapp.com",
  projectId: "mern-blog-d451b",
  storageBucket: "mern-blog-d451b.appspot.com",
  messagingSenderId: "417249015655",
  appId: "1:417249015655:web:2b3b1ad75fd1d9643ce1c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
