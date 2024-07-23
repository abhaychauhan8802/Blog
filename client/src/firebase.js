import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-bafd9.firebaseapp.com",
  projectId: "blog-bafd9",
  storageBucket: "blog-bafd9.appspot.com",
  messagingSenderId: "932092939622",
  appId: "1:932092939622:web:b79f692ade02c07062cca7",
};

export const app = initializeApp(firebaseConfig);
