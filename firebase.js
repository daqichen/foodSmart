// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhEwfhNbSzSjP61HeKOW2LvH_we1C-G5k",
  authDomain: "foodsmart-11e5c.firebaseapp.com",
  projectId: "foodsmart-11e5c",
  storageBucket: "foodsmart-11e5c.appspot.com",
  messagingSenderId: "32036638626",
  appId: "1:32036638626:web:7e126cd9137fcc4bae6cfb",
  measurementId: "G-6BDGTDEGRL"
};

// Initialize Firebase
let app;

if (firebase.apps.length===0){

    app = initializeApp(firebaseConfig);
}else{

    app = firebase.app()
}

const auth = firebase.auth();

export {auth};