# General Information

This is a login system written in JavaScript using the React framework. The system utilizes Google's Firebase to handle user authentication using various functions available from the Firebase instance created. The Material-UI library is used for majority of the styling throughout the web-application. Errors that may occur throughout the process of creating accounts, logging in, logging out, and resetting passwords are also appropriately communicated to the user. All source code is extensively documented to help others understand how to re-create a login system using React and Firebase.

# Features

Signup with email and password

Login with email and password

Logout once logged in

Resetting a forgotten password

# Requirements

Node is required to run this website as well as various dependencies that are used throughout the web-application. "npm install" can be typed into the terminal to install all required dependencies. A Firebase project's configuation is also required in order for user authentication to work and instructions to make a Firebase project is directly below. Upon retrieving the project's configuation, the user can open the ".env.local" file in the root directory and enter each value of the configuation. The user can then run "npm start" to run the web-application on their local host.

# Firebase Configuation

A Firebase account can be created at https://firebase.google.com/. Upon creating an account, the user can create a project with their desired name. Once an account is created, the user can go to the "Authentication tab" under the "Build" and click on the "Sign-in method" tab. This will show various providers to sign in with, this system solely uses the Email/Password so make sure it is enabled and picture is showed below. 

![image](https://user-images.githubusercontent.com/82501158/122659002-162c1800-d141-11eb-9999-89c973346b5b.png)

The user can then click on the gear next to "Project Overview" and click on the "Project Settings". Scrolling down there should be a header "SDK setup and configuation" that contains multiple keys and these are the ones that must be placed into the ".env.local" file. 

![image](https://user-images.githubusercontent.com/82501158/122659030-60ad9480-d141-11eb-97b1-52cdfab478c0.png)

Keep in mind that this project showing in the image above will be deleted so these keys will not be valid for use.

# Security

If the user is intending on creating a production login system, the default localhost authorized domain should be deleted off the project to block any access to the project's server through localhost. This can be done right under the "Sign in method" tab and under the "Authorized Domains".

![image](https://user-images.githubusercontent.com/82501158/122659114-3dcfb000-d142-11eb-8822-a0baedd47e1f.png)

# Brief Summary on how the login system functions

The program relies on the Context object created in the AuthContext.js file to hold all functions related to Firebase as well as the variable of the currentUser. The context object and all of it's components/variables are created and set in AuthContext.js. The file returns the useContext hook on the context object which allows all children of the context component to directly receive those values. Looking in Apps.js, the Signup, Login, Forgot-Password, and Welcome components are all children of the <AuthProvider> component which is the context component directly passing it's values to the 4 children. The signup, login, forgot-password components are all similar in nature each calling their respective functions from the context which they each gather information and manage states through various React hooks and Material-UI elements. 
  
Majority of the systems code is straight-forward and documented with guidance in mind and most people with a good understanding of React and JavaScript will not struggle much with understanding the system. One area to look out for is on line 21 of Apps.js which is a "PrivateRoute" component which is different from the other routes. This is because we don't want to give access to the "/Welcome" path without the user logging in so we need a safeguard to ensure if the user manages to get to that path it redirects them. If you look in the PrivateRoute.js under the "Welcome" folder this contains the component on line 21 of Apps.js. This component ensures that currentUser is set (a user is signed in) which will then render the Welcome page and if there is no user signed it, it redirects the user to the login page.
  
# Sources
  
 I learned how to create the login system following the structure in this Youtube video: https://www.youtube.com/watch?v=PKwu15ldZ7k&ab_channel=WebDevSimplified.
 The logo to the web-application is a favicon.ico coming from https://favicon.io/emoji-favicons/locked/ and licensed under https://creativecommons.org/licenses/by/4.0/.
