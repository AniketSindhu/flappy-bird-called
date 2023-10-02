// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: "AIzaSyB43Sa2mXbqiae0zjBa5oVHh-QWS8ccoq8",
// 	authDomain: "olinks-firestore.firebaseapp.com",
// 	projectId: "olinks-firestore",
// 	storageBucket: "olinks-firestore.appspot.com",
// 	messagingSenderId: "126461930097",
// 	appId: "1:126461930097:web:393c60cacc78d25214c9d0",
// 	measurementId: "G-V4NK541H92",
// };

const firebaseConfig = {
	apiKey: "AIzaSyC8qrbAYUqVfrhcTLIzzSctR9Yti31xZso",
	authDomain: "blockbet-telegram.firebaseapp.com",
	databaseURL: "https://blockbet-telegram-default-rtdb.firebaseio.com",
	projectId: "blockbet-telegram",
	storageBucket: "blockbet-telegram.appspot.com",
	messagingSenderId: "610788993704",
	appId: "1:610788993704:web:b199f214adc64e1c56309d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
