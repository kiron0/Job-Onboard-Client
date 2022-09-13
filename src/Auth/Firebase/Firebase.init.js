import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBk4evAfiaOIIhq8MrGHZKyIpzoQiYTc2U",
  authDomain: "job-onboard.firebaseapp.com",
  projectId: "job-onboard",
  storageBucket: "job-onboard.appspot.com",
  messagingSenderId: "595978804388",
  appId: "1:595978804388:web:7d4f35e8d7b33d28579a31"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
