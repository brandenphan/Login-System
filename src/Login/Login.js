import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Grid, Avatar } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { Alert, AlertTitle } from "@material-ui/lab";
import firebase from "firebase/app";

import { useAuth } from "../context/AuthContext";
import LoginForm from "./LoginForm";
import {
	BackgroundContainer,
	FormContainer,
	CenteredDiv,
} from "../StyledComponents";

// Combines various components to render the login page
const Login = () => {
	// Reference hooks that hold the values of the email and password textfields
	const emailRef = React.useRef();
	const passwordRef = React.useRef();

	// State hooks to hold the loading state when creating an account, remember me checkbox state, and errors
	const [error, setError] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [check, setCheck] = React.useState(false);

	const { login } = useAuth(); // the login function from the context created in the AuthContext.js file
	const history = useHistory(); // function that allows us to redirect to the different routed pages in the Apps.js file

	// Async function that will try to log the user in upon pressing the "log in" button, also handles various states, errors, and redirects upon successful login
	const handleSubmit = async (event) => {
		event.preventDefault();

		// If the user didn't check the "Remember Me" checkbox, sets the state persistence to SESSION so new tabs always require the user to sign in
		if (check === false) {
			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
		}

		try {
			setError("");
			await login(emailRef.current.value, passwordRef.current.value);
			setLoading(true);
			history.push("/Welcome");
		} catch (error) {
			setError(error.message);
		}
	};

	// Function that handles when the user checks or unchecks the remember me checkbox
	const handleCheckboxChange = (event) => {
		setCheck(event.target.checked);
	};

	// Returns the JSX of the Login page
	return (
		<>
			<BackgroundContainer>
				<Grid container spacing={0} style={{ width: "100%" }}>
					<Grid item xs={12}>
						<Grid container justify="center" spacing={0}>
							<FormContainer>
								<br />
								<br />
								<CenteredDiv>
									<Avatar>
										<LockIcon htmlColor="#668cff" />
									</Avatar>
								</CenteredDiv>
								<br />
								<Typography align="center" variant="h4">
									Log in
								</Typography>

								{/* Sends an error alert if there was an error creating the users account */}
								{error && (
									<>
										<br />
										<br />
										<Alert severity="error">
											<AlertTitle>Error</AlertTitle>
											{error}
										</Alert>
									</>
								)}

								<CenteredDiv
									style={{
										padding: "5%",
									}}
								>
									<LoginForm
										loading={loading}
										handleSubmit={handleSubmit}
										emailRef={emailRef}
										passwordRef={passwordRef}
										check={check}
										handleCheckboxChange={handleCheckboxChange}
									/>
								</CenteredDiv>
							</FormContainer>
						</Grid>
					</Grid>
				</Grid>
			</BackgroundContainer>
		</>
	);
};

export default Login;
