import React from "react";
import { Typography, Grid, Avatar } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useHistory } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import SignupForm from "./SignupForm";
import {
	BackgroundContainer,
	FormContainer,
	CenteredDiv,
} from "../StyledComponents";

// Combines various components to render the Signup page
const Signup = () => {
	// Reference hooks that hold the values of the email and password textfields
	const emailRef = React.useRef();
	const passwordRef = React.useRef();

	// State hooks to hold the loading state when creating an account and errors
	const [error, setError] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const { signup } = useAuth(); // signup function from the context created in the AuthContext.js file
	const history = useHistory(); // function that allows us to redirect to the different routed pages in the Apps.js file

	// Async function that will create the users account in firebase upon pressing the sign up button and catches any errors
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			setError("");
			await signup(emailRef.current.value, passwordRef.current.value);
			setLoading(true);
			history.push("/Welcome");
		} catch (error) {
			setError(error.message);
		}
	};

	// Returns JSX of the Signup page
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
										<AccountCircleIcon fontSize="large" htmlColor="#668cff" />
									</Avatar>
								</CenteredDiv>

								<br />
								<Typography align="center" variant="h4">
									Sign Up
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
									<SignupForm
										loading={loading}
										handleSubmit={handleSubmit}
										emailRef={emailRef}
										passwordRef={passwordRef}
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

export default Signup;
