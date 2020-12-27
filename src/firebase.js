import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAKF9Cdf7AEB631RMdVlgxBAdY0p9LNGo8",
	authDomain: "open-nislab.firebaseapp.com",
	projectId: "open-nislab",
	storageBucket: "open-nislab.appspot.com",
	messagingSenderId: "1082535253333",
	appId: "1:1082535253333:web:c0e4499e6f07a6fa970bdc",
	measurementId: "G-4T0MBY68DT"
};

/* firebase.getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = firebase.auth().onAuthStateChanged(user => {
		unsubscribe()
		resolve(user);
		}, reject);
	});
}; */

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
