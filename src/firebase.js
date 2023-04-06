
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWKN1RyZ1o-jqWgbxkj3nI625GKT6reWM",
  authDomain: "across-chat.firebaseapp.com",
  projectId: "across-chat",
  storageBucket: "across-chat.appspot.com",
  messagingSenderId: "620018597301",
  appId: "1:620018597301:web:e58eef75986fd2565f2dfc"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();