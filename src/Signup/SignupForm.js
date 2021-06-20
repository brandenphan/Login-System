import { CenteredDiv } from "../StyledComponents";
import { Button, TextField, Link } from "@material-ui/core";

// Renders the email, password textfield and sign up button on the signup page
const SignupForm = ({ loading, handleSubmit, emailRef, passwordRef }) => (
	<form onSubmit={handleSubmit}>
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
		<TextField
			variant="outlined"
			margin="normal"
			required
			fullWidth
			name="password"
			label="Password"
			type="password"
			inputRef={passwordRef}
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
				Sign Up
			</Button>
		</CenteredDiv>
		<br />
		<CenteredDiv>
			<Link href="/Login" variant="body1">
				Already have an account? Log in
			</Link>
		</CenteredDiv>
	</form>
);

export default SignupForm;
