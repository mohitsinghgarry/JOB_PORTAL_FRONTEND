// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs1uBbyCB7LbW46Ub0J-tFtX2PR4zjBCY",
  authDomain: "zidio-job-portal.firebaseapp.com",
  projectId: "zidio-job-portal",
  storageBucket: "zidio-job-portal.appspot.com",
  messagingSenderId: "946764476239",
  appId: "1:946764476239:web:1729a1f1505ad062449f3a",
  measurementId: "G-NSM4D7FZBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;