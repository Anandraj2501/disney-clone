import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnzkSwjGp-nAnDVoaHgIK_FjSS0gCLl24",
    authDomain: "disneyplus-clone-ede58.firebaseapp.com",
    projectId: "disneyplus-clone-ede58",
    storageBucket: "disneyplus-clone-ede58.appspot.com",
    messagingSenderId: "930390922042",
    appId: "1:930390922042:web:658ad2aba7ad4600867603",
    measurementId: "G-FZZ10MEFBW"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = app.firestore();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);


export {auth,provider};
export default db;