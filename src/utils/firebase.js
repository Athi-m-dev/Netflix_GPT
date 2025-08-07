

// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgYCrK_PmbAOqjVnOKDBTG_K3KrJ5Jq_0",
  authDomain: "netflix-gpt-41f2a.firebaseapp.com",
  projectId: "netflix-gpt-41f2a",
  storageBucket: "netflix-gpt-41f2a.firebasestorage.app",
  messagingSenderId: "970113711537",
  appId: "1:970113711537:web:6afcd78ed242a3f0e31190",
  measurementId: "G-BVLDSD21YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()
