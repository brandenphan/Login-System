import { CenteredDiv } from "../StyledComponents";
import { TextField, Button, Link } from "@material-ui/core";

// Renders the email textfield, reset password button, and the login and sign up links
const ForgotPasswordForm = ({ handleSubmit, emailRef, loading }) => (
	<form onSubmit={handleSubmit} style={{ width: "100%" }}>
		<TextField
			variant="outlined"
			margin="normal"
			required
			fullWidth
			label="Email Address"
			name="email"
			type="email"
			inputRef={emailRef}
		/>
		<br />
		<br />
		<CenteredDiv>
			<Button
				disabled={loading}
				type="submit"
				variant="contained"
				style={{
					backgroundColor: "#668cff",
					color: "white",
					width: "100%",
					padding: "3%",
				}}
			>
				Reset Password
			</Button>
		</CenteredDiv>
		<br />
		<CenteredDiv>
			<Link href="/Login" variant="body1">
				Login
			</Link>
		</CenteredDiv>

		<br />
		<CenteredDiv>
			<Link href="/Signup" variant="body1">
				Need an account? Sign up
			</Link>
		</CenteredDiv>
	</form>
);

export default ForgotPasswordForm;
