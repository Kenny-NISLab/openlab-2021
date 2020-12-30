import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAKF9Cdf7AEB631RMdVlgxBAdY0p9LNGo8",
	authDomain: "open-nislab.firebaseapp.com",
	databaseURL: "https://open-nislab-default-rtdb.firebaseio.com",
	projectId: "open-nislab",
	storageBucket: "open-nislab.appspot.com",
	messagingSenderId: "1082535253333",
	appId: "1:1082535253333:web:c0e4499e6f07a6fa970bdc",
	measurementId: "G-4T0MBY68DT"

	/* apiKey: "AIzaSyAKF9Cdf7AEB631RMdVlgxBAdY0p9LNGo8",
	authDomain: "open-nislab.firebaseapp.com",
	projectId: "open-nislab",
	storageBucket: "open-nislab.appspot.com",
	messagingSenderId: "1082535253333",
	appId: "1:1082535253333:web:c0e4499e6f07a6fa970bdc",
	measurementId: "G-4T0MBY68DT" */
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
