import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAaOvOpB44P-XpdJZ8sPLKFRS8XFVxHSTs",
  authDomain: "atul-singh---portfolio.firebaseapp.com",
  projectId: "atul-singh---portfolio",
  storageBucket: "atul-singh---portfolio.appspot.com",
  messagingSenderId: "280586888077",
  appId: "1:280586888077:web:e74f1c0df7cb0bee1c13c4"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();