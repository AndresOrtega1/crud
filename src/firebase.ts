
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMrz2GjPB4tLp8_u2IU2JA3Hfy_jQHLPQ",
  authDomain: "test123-d1383.firebaseapp.com",
  projectId: "test123-d1383",
  storageBucket: "test123-d1383.appspot.com",
  messagingSenderId: "624295291182",
  appId: "1:624295291182:web:18533d912007ea26ceb2bf",
  measurementId: "G-NRHXTF4NPB"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);