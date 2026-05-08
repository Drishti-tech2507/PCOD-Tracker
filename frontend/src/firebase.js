import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgfumMsltRTli_4YTU2VsWzwTEMuuJdFs",
  authDomain: "lunessa-32ca2.firebaseapp.com",
  projectId: "lunessa-32ca2",
  storageBucket: "lunessa-32ca2.firebasestorage.app",
  messagingSenderId: "53042344345",
  appId: "1:53042344345:web:002eef2e20fc0fb61ea308",
  measurementId: "G-FJC83W3J4R"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();