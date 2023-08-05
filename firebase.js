import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBCLyvpGSTAXUo_zeKrpz67c9a0XEc4zKQ",
  authDomain: "myapp-ece0d.firebaseapp.com",
  projectId: "myapp-ece0d",
  storageBucket: "myapp-ece0d.appspot.com",
  messagingSenderId: "1065759128892",
  appId: "1:1065759128892:web:1f23497e2c3da467e47239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { auth,db};