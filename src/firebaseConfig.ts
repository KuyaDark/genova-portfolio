import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpzh3RUBCAsofmq8VwtCJVClRCO39Hbwk",
  authDomain: "portfolio-fbc98.firebaseapp.com",
  projectId: "portfolio-fbc98",
  storageBucket: "portfolio-fbc98.appspot.com", // fixed
  messagingSenderId: "83748497528",
  appId: "1:83748497528:web:b6e4141a0eb8a97fbf658d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
