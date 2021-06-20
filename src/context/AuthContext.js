import React from "react";
import { auth } from "../firebase/firebase";

const AuthContext = React.createContext(); // Creates a context

// Exports the context and its value created above
export const useAuth = () => {
	return React.useContext(AuthContext);
};

// Context component that holds various functions and values that are passed down to all of its children
const AuthProvider = ({ children }) => {
	// State hooks for the currentUser logged in and if anything is loading
	const [currentUser, setCurrentUser] = React.useState();
	const [loading, setLoading] = React.useState(true);

	// Returns a function to sign the user up
	const signup = (email, password) => {
		return auth.createUserWithEmailAndPassword(email, password);
	};

	// Returns a function to log the user in
	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password);
	};

	// Returns a function to log the user out
	const logout = () => {
		return auth.signOut();
	};

	// Returns a function to reset the users password
	const resetPassword = (email) => {
		return auth.sendPasswordResetEmail(email);
	};

	// Side-effect hook that runs on mount as there is an empty dependency array
	React.useEffect(() => {
		// Adds an observer for when the user is signed in or signed, firebase handles local storage and can see if a user was recently signed in
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false); // Since firebase checks the browsers local storage, it needs time to load which is set true above and then false here when it is done loading
		});

		// When the component disconnects, it naturally runs any returning function in this hook so it will unsubscribe the observer created from auth.onAuthStateChanged to avoid any memory leaks
		return () => {
			unsubscribe();
		};
	}, []);

	// Value will hold the value of currentUser as well as the various functions created above
	const value = {
		currentUser,
		login,
		signup,
		logout,
		resetPassword,
	};

	// Passes in the value above into the context created which will allow all children of this component to access the values through the context
	return (
		<AuthContext.Provider value={value}>
			{/* If firebase is still checking the local storage for a signed in user, we don't want to render the children yet */}
			{!loading && children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
