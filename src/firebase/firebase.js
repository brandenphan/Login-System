import firebase from "firebase/app";
import "firebase/auth";

// Holds an instance of the firebase object created with the various keys found in the .env.local file
const app = firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
});

// Exports the auth function found in the firebase object stored in app when firebase is initialized above
export const auth = app.auth();
export default app;

// console.log(firebase.auth.Auth.Persistence.SESSION);
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
