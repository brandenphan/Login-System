import React from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import "@fontsource/source-sans-pro";
import { Alert, AlertTitle } from "@material-ui/lab";

import {
	BackgroundContainer,
	FormContainer,
	CenteredDiv,
} from "../StyledComponents";

// Combines various components to render the Welcome page
const WelcomePage = () => {
	const [error, setError] = React.useState(""); // Reference hook that holds the value of the email textfield

	const { currentUser, logout } = useAuth(); // holds the currentUser and logout function from the context created in the AuthContext.js file
	const history = useHistory(); // function that allows us to redirect to the different routed pages in the Apps.js file

	// Async function that will log the user out of the account in firebase upon pressing the "log out" button and ccatches any errors
	const handleLogout = async () => {
		setError("");

		try {
			await logout();
			history.push("/Login");
		} catch (error) {
			setError(error.message);
		}
	};

	// Returns JSX of the Welcome page
	return (
		<>
			<BackgroundContainer>
				<Grid container spacing={2} style={{ width: "100%" }}>
					<Grid item xs={12}>
						<Grid container justify="center" spacing={2}>
							<FormContainer>
								<h2
									style={{ textAlign: "center", fontFamily: "Source Sans Pro" }}
								>
									Welcome, thanks for creating an account and logging in!
								</h2>

								<h3
									style={{ textAlign: "center", fontFamily: "Source Sans Pro" }}
								>
									Currently logged in as: <b>{currentUser.email}</b>
								</h3>

								{/* Sends an error alert if there was an error logging the user out */}
								{error && (
									<>
										<Alert severity="error">
											<AlertTitle>Error</AlertTitle>
											{error}
										</Alert>
										<br />
									</>
								)}

								<form>
									<CenteredDiv>
										<Button
											variant="contained"
											style={{
												backgroundColor: "#668cff",
												color: "white",
												width: "90%",
												padding: "3%",
											}}
											onClick={handleLogout}
										>
											Log out
										</Button>
									</CenteredDiv>
								</form>
								<br />
							</FormContainer>
						</Grid>
					</Grid>
				</Grid>
			</BackgroundContainer>
			{/* {error && <p>ERROR</p>} */}
			<h1>WELCOME</h1>
			<h2>Current user: {currentUser.email}</h2>
			<p>WELCOME PAGE</p>
			<button onClick={handleLogout}>Log out</button>
		</>
	);
};

export default WelcomePage;
