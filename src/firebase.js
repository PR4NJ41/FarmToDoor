import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDSLCQSR3gAkG-JDb8Kxyr9PLBglWT7NFE",
	authDomain: "farmtodoor-607a8.firebaseapp.com",
	projectId: "farmtodoor-607a8",
	storageBucket: "farmtodoor-607a8.appspot.com",
	messagingSenderId: "809901556006",
	appId: "1:809901556006:web:952e71016a88c18ab241e7",
	measurementId: "G-2QZQLDLLD1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };