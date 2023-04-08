import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVGN6O6ASy-BzClYxHV0mifUp9B0Tp3kA",
  authDomain: "spacesavvy-js4.firebaseapp.com",
  projectId: "spacesavvy-js4",
  storageBucket: "spacesavvy-js4.appspot.com",
  messagingSenderId: "101186152947",
  appId: "1:101186152947:web:df5e585ffec6e77ac74a86",
  measurementId: "G-6M78VM07LP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
