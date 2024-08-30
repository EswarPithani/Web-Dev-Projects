

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getAuth, createUserWithEmailPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"

import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
const firebaseConfig = {
    apiKey: "AIzaSyBiL5VprZad4oeJFtLSLDOib2pioyQlhXY",
    authDomain: "speechtonote-a05f7.firebaseapp.com",
    projectId: "speechtonote-a05f7",
    storageBucket: "speechtonote-a05f7.appspot.com",
    messagingSenderId: "251731334792",
    appId: "1:251731334792:web:c3217cf2373f671b98313d"
  };
  const app = initializeApp(firebaseConfig);
