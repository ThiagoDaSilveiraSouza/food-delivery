import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvwf09A9BI-q5C6IzlezS2Yd0jhGPQa0c",
  authDomain: "steel-citizen-402211.firebaseapp.com",
  projectId: "steel-citizen-402211",
  storageBucket: "steel-citizen-402211.appspot.com",
  messagingSenderId: "96292006013",
  appId: "1:96292006013:web:fd64721017db95dbe4e914",
  measurementId: "G-V6LSCM40GQ",
};

export const firebaseApp = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
