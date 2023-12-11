import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaZHCvjYopSR_RejMQmeAR9ztbLLcfipA",
  authDomain: "port-1-56c55.firebaseapp.com",
  projectId: "port-1-56c55",
  storageBucket: "port-1-56c55.appspot.com",
  messagingSenderId: "275502930972",
  appId: "1:275502930972:web:0d5c587c2e292aafe793d9",
};

const app = initializeApp(firebaseConfig);
// getApps().length ? getApp() : 

export const authentication = getAuth(app);
