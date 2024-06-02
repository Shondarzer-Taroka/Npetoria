// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
apiKey: "AIzaSyA2yD-99SxzoSRFCZ07ZjY-Qh5bJTiNQLM",
authDomain: "assignment-twelve-final.firebaseapp.com",
projectId: "assignment-twelve-final",
storageBucket: "assignment-twelve-final.appspot.com",
messagingSenderId: "164816830698",
appId: "1:164816830698:web:2a9b8f2c88183d037dd793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth