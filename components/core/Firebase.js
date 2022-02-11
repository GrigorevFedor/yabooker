import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCTzB6uO7DmQR1-yxIVGirBAd3N6Xqnvpo",
    authDomain: "yabooker-1ea7e.firebaseapp.com",
    databaseURL: "https://yabooker-1ea7e-default-rtdb.firebaseio.com",
    projectId: "yabooker-1ea7e",
    storageBucket: "yabooker-1ea7e.appspot.com",
    messagingSenderId: "48283669248",
    appId: "1:48283669248:web:3e620f382d3481626b19e5",
    measurementId: "G-Z4ZVE56CLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth();
export const db = getDatabase();
