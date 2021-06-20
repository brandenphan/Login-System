import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { CenteredDiv } from "../StyledComponents";

// Renders the "log in" and "sign up" buttons on the landing page
const LandingPageForm = () => {
	const history = useHistory(); // function that allows us to redirect to the different routed pages in the Apps.js file

	// Returns the JSX for the "log in" and "sign up" buttons
	return (
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
					onClick={() => {
						history.push("/Login");
					}}
				>
					Log in
				</Button>
			</CenteredDiv>
			<br />
			<CenteredDiv>
				<Button
					variant="contained"
					style={{
						backgroundColor: "#668cff",
						color: "white",
						width: "90%",
						padding: "3%",
					}}
					onClick={() => {
						history.push("/Signup");
					}}
				>
					Sign up
				</Button>
			</CenteredDiv>
			<br />
		</form>
	);
};

export default LandingPageForm;
