import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWOv08L4sjNz_4zGF0FFgcOLyBMTzcNI4",
    authDomain: "mika-38fc4.firebaseapp.com",
    projectId: "mika-38fc4",
    storageBucket: "mika-38fc4.appspot.com",
    messagingSenderId: "273860548797",
    appId: "1:273860548797:web:4f3f2accc7b111182fffd4",
    databaseURL: "https://mika-38fc4-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
