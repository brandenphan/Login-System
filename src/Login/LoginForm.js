import { CenteredDiv } from "../StyledComponents";
import {
	TextField,
	Button,
	Link,
	Checkbox,
	Typography,
	FormControlLabel,
} from "@material-ui/core";

const LoginForm = ({
	loading,
	handleSubmit,
	emailRef,
	passwordRef,
	check,
	handleCheckboxChange,
}) => (
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

		<FormControlLabel
			value="start"
			control={
				<Checkbox
					checked={check}
					onChange={handleCheckboxChange}
					color="primary"
				/>
			}
			label={<Typography style={{ fontSize: "14px" }}>Remember Me</Typography>}
			labelPlacement="end"
		/>
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
				Log in
			</Button>
		</CenteredDiv>

		<br />
		<CenteredDiv>
			<Link href="/Forgot-Password" variant="body1">
				Forgot Password?
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

export default LoginForm;
