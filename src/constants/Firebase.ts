import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7FdYNHA-OYfAvaeDxaLcB_HwxX164vHE",
    authDomain: "rws-users-4cfb3.firebaseapp.com",
    databaseURL: "https://rws-users-4cfb3-default-rtdb.firebaseio.com",
    projectId: "rws-users-4cfb3",
    storageBucket: "rws-users-4cfb3.appspot.com",
    messagingSenderId: "421984356465",
    appId: "1:421984356465:web:0dfe69d3f6e2385ba6b3d0",
    measurementId: "G-NR5SQR5QXE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export default {
    app,
    analytics,
    auth,
    db
}