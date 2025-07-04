import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAI_O46bqFplWc4oXb0OuDUYrJ1eYWxLvA",
  authDomain: "echecks-e33c9.firebaseapp.com",
  projectId: "echecks-e33c9",
  storageBucket: "echecks-e33c9.firebasestorage.app",
  messagingSenderId: "686345245692",
  appId: "1:686345245692:web:3520c54e6e56fba5d49879",
  measurementId: "G-MEFEC5TJDM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

