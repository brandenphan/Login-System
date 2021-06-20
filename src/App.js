import AuthProvider from "./context/AuthContext";
import Signup from "./Signup/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import WelcomePage from "./Welcome/WelcomePage";
import Login from "./Login/Login";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import PrivateRoute from "./Welcome/PrivateRoute";

// Combines all the various differenet page components to create the website with different routes to each page
const App = () => {
	return (
		<Router>
			<Switch>
				<AuthProvider>
					<Route path="/" exact component={LandingPage} />
					<Route path="/Signup" component={Signup} />
					<Route path="/Login" component={Login} />
					<Route path="/Forgot-Password" component={ForgotPassword} />
					<PrivateRoute path="/Welcome" component={WelcomePage} />
				</AuthProvider>
			</Switch>
		</Router>
	);
};

export default App;
