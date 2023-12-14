import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDYUkqww-XM2KX-ayd_0lwZmtVMnoZihRs",
  authDomain: "otpverification-88df8.firebaseapp.com",
  projectId: "otpverification-88df8",
  storageBucket: "otpverification-88df8.appspot.com",
  messagingSenderId: "534019157676",
  appId: "1:534019157676:web:65800bb29c7e0ac6fef909"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)