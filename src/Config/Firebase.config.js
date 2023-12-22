import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgXwUVID9Kf8TTx5btZWmVyjPN2ElrcNM",
  authDomain: "scc-technovision-inc-12970.firebaseapp.com",
  projectId: "scc-technovision-inc-12970",
  storageBucket: "scc-technovision-inc-12970.appspot.com",
  messagingSenderId: "385148978896",
  appId: "1:385148978896:web:20c21fc74b1ec9005ec0d5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth