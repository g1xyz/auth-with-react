import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const rootVar = import.meta.env;

const firebaseConfig = {
  apiKey: rootVar.VITE_API_KEY,
  authDomain: rootVar.VITE_AUTH_DOMAIN,
  projectId: rootVar.VITE_PROJECT_ID,
  storageBucket: rootVar.VITE_STORAGE_BUCKET,
  messagingSenderId: rootVar.VITE_MESSAGING_SENDER_ID,
  appId: rootVar.VITE_APP_ID,
  measurementId: rootVar.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth};