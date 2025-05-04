// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDRvtOVA34w6kaHx4D9afbRV1otuAyTJnU",
  authDomain: "toki-cc170.firebaseapp.com",
  projectId: "toki-cc170",
  storageBucket: "toki-cc170.appspot.com",
  messagingSenderId: "690280373934",
  appId: "1:690280373934:web:71e40e2efebe5802ed973f",
  measurementId: "G-2C0JJS9YYR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
