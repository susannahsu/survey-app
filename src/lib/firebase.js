// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGX-SQFCubtgWrY0V20ArXHkH41SESBTc",
  authDomain: "survey-app-3756e.firebaseapp.com",
  projectId: "survey-app-3756e",
  storageBucket: "survey-app-3756e.appspot.com",
  messagingSenderId: "39456977839",
  appId: "1:39456977839:web:4589aba02b55a6e95c755a",
  measurementId: "G-KJ29C3FH8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
