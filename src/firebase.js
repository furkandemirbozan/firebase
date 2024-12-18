import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYjpIbNmC6Wa3x9wqcQI6Tz4IpS2EZtDI",
    authDomain: "fir-1132c.firebaseapp.com",
    projectId: "fir-1132c",
    storageBucket: "fir-1132c.firebasestorage.app",
    messagingSenderId: "252008789983",
    appId: "1:252008789983:web:c5a995ae514d148e1ff66a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);