// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: "AIzaSyB4-hRCbqaR_mbcGobGnK1RRS0EqjhR3w4",

	authDomain: "git-coffee-fa41c.firebaseapp.com",

	databaseURL: "https://git-coffee-fa41c-default-rtdb.firebaseio.com",

	projectId: "git-coffee-fa41c",

	storageBucket: "git-coffee-fa41c.appspot.com",

	messagingSenderId: "802558887614",

	appId: "1:802558887614:web:f64bfa0fb06a6357fa40ef",
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);

export default firebase;
