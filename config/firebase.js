// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
//import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzWVodPrvGCc_Aiy25tYMd-lPHWjN-GbI",
  authDomain: "authentication-92f91.firebaseapp.com",
  projectId: "authentication-92f91",
  storageBucket: "authentication-92f91.appspot.com",
  messagingSenderId: "442027400703",
  appId: "1:442027400703:web:a81ecdf20abd738d861bca"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase};