// import firebase from 'firebase/app'
// import 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyCMp455rz7ghgMrdQiI03CSvuqycs7AlGw",
//     authDomain: "vueblog-2705c.firebaseapp.com",
//     projectId: "vueblog-2705c",
//     storageBucket: "vueblog-2705c.firebasestorage.app",
//     messagingSenderId: "487729841402",
//     appId: "1:487729841402:web:8c618e26226118d1813543"
// };


// firebase.initializeApp(firebaseConfig)

// const projectFirestore = firebase.firestore()

// export { projectFirestore }


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMp455rz7ghgMrdQiI03CSvuqycs7AlGw",
    authDomain: "vueblog-2705c.firebaseapp.com",
    projectId: "vueblog-2705c",
    storageBucket: "vueblog-2705c.firebasestorage.app",
    messagingSenderId: "487729841402",
    appId: "1:487729841402:web:8c618e26226118d1813543"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const myCollection = collection(db, 'posts')

export { myCollection }