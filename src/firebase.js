// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKpxvOdkTgfxC-xj3b44hef_Pn5nb0m20",
  authDomain: "haid-d1036.firebaseapp.com",
  projectId: "haid-d1036",
  storageBucket: "haid-d1036.appspot.com",
  messagingSenderId: "1052482291151",
  appId: "1:1052482291151:web:daf1f8813a0b3d1c8fbeba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);