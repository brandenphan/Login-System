import React from "react";
import { Typography, Grid, Avatar } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { Alert, AlertTitle } from "@material-ui/lab";

import { useAuth } from "../context/AuthContext";
import ForgotPasswordForm from "./ForgotPasswordForm";
import {
	BackgroundContainer,
	FormContainer,
	CenteredDiv,
} from "../StyledComponents";

// Combines various components to render the forgot password page
const ForgotPassword = () => {
	// State hooks to holds success/error values when resetting the users password as well as loading state
	const [error, setError] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);

	const emailRef = React.useRef(); // reference hook that holds the values of the email textfield
	const { resetPassword } = useAuth(); // the resetPassword function from the context created in the AuthContext.js file

	// Async function that will try to reset the users password upon pressing the "reset password" button, also handles various states and errors
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			setSuccess(false);
			setError("");
			await resetPassword(emailRef.current.value);
			setLoading(true);
			setSuccess(true);
		} catch (error) {
			setError(error.message);
		}
		setLoading(false);
	};

	// Returns the JSX of the Forgot Password page
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
										<LockIcon style={{ color: "black" }} />
									</Avatar>
								</CenteredDiv>

								<br />
								<Typography align="center" variant="h4">
									Password Reset
								</Typography>

								{/* Sends an error alert if there was an error resetting the users account, if there is no error tells them to check their inbox for further instructions */}
								{error ? (
									<>
										<br />
										<br />
										<Alert severity="error">
											<AlertTitle>Error</AlertTitle>
											{error}
										</Alert>
									</>
								) : (
									success && (
										<>
											<br />
											<br />
											<Alert severity="success">
												Check your inbox for further instructions on resetting
												your password
											</Alert>
										</>
									)
								)}

								<CenteredDiv
									style={{
										padding: "5%",
									}}
								>
									<ForgotPasswordForm
										emailRef={emailRef}
										loading={loading}
										handleSubmit={handleSubmit}
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

export default ForgotPassword;
