import { Grid } from "@material-ui/core";
import "@fontsource/source-sans-pro";

import LandingPageForm from "./LandingPageForm";
import { BackgroundContainer, FormContainer } from "../StyledComponents";

// Combines various components to render the Landing page
const LandingPage = () => (
	<>
		<BackgroundContainer>
			<Grid container spacing={2} style={{ width: "100%" }}>
				<Grid item xs={12}>
					<Grid container justify="center" spacing={2}>
						<FormContainer>
							<h2
								style={{ textAlign: "center", fontFamily: "Source Sans Pro" }}
							>
								Landing Page
							</h2>
							<LandingPageForm />
						</FormContainer>
					</Grid>
				</Grid>
			</Grid>
		</BackgroundContainer>
	</>
);

export default LandingPage;
