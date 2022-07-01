import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {

    apiKey: "AIzaSyDMWqVtn7MzqWX1yQnlSdDznMOUYV09nDs",
  
    authDomain: "luxury-homes-2c51a.firebaseapp.com",
  
    projectId: "luxury-homes-2c51a",
  
    storageBucket: "luxury-homes-2c51a.appspot.com",
  
    messagingSenderId: "984830488235",
  
    appId: "1:984830488235:web:eb6444833ec3d32ac351ee"
  
  };
  
  // Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 