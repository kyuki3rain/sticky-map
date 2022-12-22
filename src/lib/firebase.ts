// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// analytics
const analytics = getAnalytics(app);
// 認証周り
const auth = getAuth(app);
// firestore
const database = getFirestore(app);

const isDevelopment = import.meta.env.DEV;
if (isDevelopment) {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(database, "127.0.0.1", 8080);
}

export { app, analytics, auth, database };
