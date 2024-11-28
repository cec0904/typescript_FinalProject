// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLwj-WqVcktVZ5PFcMcKu14oO7csfsIzI",
  authDomain: "daelimx-91e85.firebaseapp.com",
  projectId: "daelimx-91e85",
  storageBucket: "daelimx-91e85.appspot.com",
  messagingSenderId: "950254391639",
  appId: "1:950254391639:web:0fe329f976db31c200ae12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 파이어베이스 인증 정보
export const auth = getAuth(app);
// 파이어베이스 DB(firestore) 정보
export const firestore = getFirestore(app);
