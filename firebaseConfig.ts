// firebaseConfig.ts
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVnxhw2yUzPPZ0UcWh7ZTY1aoQrC3imp4",
  authDomain: "easylisten-mvp-client.firebaseapp.com",
  projectId: "easylisten-mvp-client",
  storageBucket: "easylisten-mvp-client.appspot.com",
  messagingSenderId: "4302033846",
  appId: "1:4302033846:web:5c5811d770db774d866717",
};

export const app = initializeApp(firebaseConfig);
