// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiZMGCSgapzKhN7TlTTlmduGWhIREm5DY",
  authDomain: "toastedminds-3aaaa.firebaseapp.com",
  projectId: "toastedminds-3aaaa",
  storageBucket: "toastedminds-3aaaa.appspot.com",
  messagingSenderId: "523114061716",
  appId: "1:523114061716:web:6d92c13695f0cc652d3981",
  measurementId: "G-220TREFMDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;