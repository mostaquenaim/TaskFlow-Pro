import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_jmAeBbxmoz3aXj3M3XHc4Pe3ZYR4pqM",
  authDomain: "taskflowpro-97e5f.firebaseapp.com",
  projectId: "taskflowpro-97e5f",
  storageBucket: "taskflowpro-97e5f.appspot.com",
  messagingSenderId: "976392991557",
  appId: "1:976392991557:web:b938912316a0bcb9ee442c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth