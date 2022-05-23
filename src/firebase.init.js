// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaXXOzdenxayThKVXdze6tShMy1oCWLLY",
  authDomain: "best-tools-manufacturer.firebaseapp.com",
  projectId: "best-tools-manufacturer",
  storageBucket: "best-tools-manufacturer.appspot.com",
  messagingSenderId: "769864667963",
  appId: "1:769864667963:web:5a9df7e2d00e7657285d1e"

  // apiKey: "process.env.REACT_APP_API_KEY",
  // authDomain: "process.env.REACT_APP_AUTH_DOMAIN",
  // projectId: "process.env.REACT_APP_PROJECT_ID",
  // storageBucket: "process.env.REACT_APP_STORAGE_BUCKET",
  // messagingSenderId: "process.env.REACT_APP_MESSAGING_SENDER_ID",
  // appId: "process.env.REACT_APP_APP_ID",


  // apiKey:process.env.REACT_APP_API_KEY,
  // authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  // projectId:process.env.REACT_APP_PROJECT_ID,
  // storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId:process.env.REACT_APP_APPID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

