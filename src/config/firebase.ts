export const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY as string;
export const AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string;
export const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID as string;
export const STORAGE_BUCKET = import.meta.env
  .VITE_FIREBASE_STORAGE_BUCKET as string;
export const MESSAGING_SENDER_ID = import.meta.env
  .VITE_FIREBASE_MESSAGING_SENDER_ID as string;
export const APP_ID = import.meta.env.VITE_FIREBASE_APP_ID as string;
export const MEASUREMENT_ID = import.meta.env
  .VITE_FIREBASE_MEASUREMENT_ID as string;

export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};
