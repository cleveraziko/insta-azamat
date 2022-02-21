// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_UJTmtXGu-inG0JbgiToE4eNhvlCjyYY",
    authDomain: "insta-clone-b1f94.firebaseapp.com",
    projectId: "insta-clone-b1f94",
    storageBucket: "insta-clone-b1f94.appspot.com",
    messagingSenderId: "659603765167",
    appId: "1:659603765167:web:83c64bb8ba6c695e73e15a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage()

export {app, db, storage}