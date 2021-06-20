import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Grid, Avatar } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { Alert, AlertTitle } from "@material-ui/lab";

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

	// State hooks to hold the loading state when creating an account and errors
	const [error, setError] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const { login } = useAuth(); // the login function from the context created in the AuthContext.js file
	const history = useHistory(); // function that allows us to redirect to the different routed pages in the Apps.js file

	// Async function that will try to log the user in upon pressing the "log in" button, also handles various states, errors, and redirects upon successful login
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			setError("");
			await login(emailRef.current.value, passwordRef.current.value);
			setLoading(true);
			history.push("/Welcome");
		} catch (error) {
			setError(error.message);
		}
	};

	// Returns the JSX of the Login page
	return (
		<>
			<BackgroundContainer>
				<Grid container spacing={2} style={{ width: "100%" }}>
					<Grid item xs={12}>
						<Grid container justify="center" spacing={2}>
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
