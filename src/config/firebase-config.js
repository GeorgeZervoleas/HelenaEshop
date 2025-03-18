import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAeEPk7ThUuEIYkMJsLrrCkgkAMsAtvmPg",
    authDomain: "elenaeshop-6eaf6.firebaseapp.com",
    projectId: "elenaeshop-6eaf6",
    storageBucket: "elenaeshop-6eaf6.appspot.com",
    messagingSenderId: "1031015022728",
    appId: "1:1031015022728:web:506a38d2dcdba66fc85f3d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
