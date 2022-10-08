// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";

import {
    getFirestore,
} from "firebase/firestore";
import { createUserDetails } from "../services/userDetailsService";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_STORAGE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MESUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
}

const logInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const registerWithEmailAndPassword = async (name, email, password, workerCategory) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    await Promise.all(
        updateProfile(user, { displayName: name }),
        createUserDetails({
            name,
            displayName: name,
            email,
            workerCategory,
        })
    );
};

const sendPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword as signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    onAuthStateChanged
};