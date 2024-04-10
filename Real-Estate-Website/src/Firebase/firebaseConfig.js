
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBDAZxZGGjDiadfqRNiXqXNdwxHYO5s6AE",
  authDomain: "real-estate-authenticati-8c741.firebaseapp.com",
  projectId: "real-estate-authenticati-8c741",
  storageBucket: "real-estate-authenticati-8c741.appspot.com",
  messagingSenderId: "232001192719",
  appId: "1:232001192719:web:2dde1be1fa8bb08c30347a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth