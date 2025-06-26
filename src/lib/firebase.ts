// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB16twiiP2xuJdNpXMVucgN0U9TjBdVzS4",
  authDomain: "assesment-f129f.firebaseapp.com",
  projectId: "assesment-f129f",
  storageBucket: "assesment-f129f.firebasestorage.app",
  messagingSenderId: "262577093048",
  appId: "1:262577093048:web:d3153622858fcd9aa7374d",
  measurementId: "G-17E4F0695N"
};

// Initialize Firebase
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics: Promise<Analytics | null> = isSupported().then(yes => (yes ? getAnalytics(app) : null));

export { app, analytics };
