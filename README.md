# General Information

This is a login system written in JavaScript using the React framework. The system utilizes Google's Firebase to handle user authentication using various functions available from the Firebase instance created. The Material-UI library is used for majority of the styling throughout the web-application. Errors that may occur throughout the process of creating accounts, logging in, logging out, and resetting passwords are also appropriately communicated to the user. All source code is extensively documented to help others understand how to re-create a login system using React and Firebase.

# Requirements

Node is required to run this website as well as various dependencies that are used throughout the web-application. "npm install" can be typed into the terminal to install all required dependencies. A Firebase project's configuation is also required in order for user authentication to work and instructions to make a Firebase project is directly below. Upon retrieving the project's configuation, the user can open the ".env.local" file in the root directory and enter each value of the configuation. The user can then run "npm start" to run the web-application on their local host.

# Firebase Configuation

A Firebase account can be created at https://firebase.google.com/. Upon creating an account, the user can create a project with their desired name. Once an account is created, the user can go to the "Authentication tab" under the "Build" and click on the "Sign-in method" tab. This will show various providers to sign in with, this system solely uses the Email/Password so make sure it is enabled and picture is showed below. 

![image](https://user-images.githubusercontent.com/82501158/122659002-162c1800-d141-11eb-9999-89c973346b5b.png)

The user can then click on the gear next to "Project Overview" and click on the "Project Settings". Scrolling down there should be a header "SDK setup and configuation" that contains multiple keys and these are the ones that must be placed into the ".env.local" file. 

![image](https://user-images.githubusercontent.com/82501158/122659030-60ad9480-d141-11eb-97b1-52cdfab478c0.png)

Keep in mind that this project showing in the image above will be deleted so these keys will not be valid for use.

# Note

If the user is intending on creating a production login system, the default localhost authorized domain should be deleted off the project to stop any access to the project's server through localhost. This can be done right under the "Sign in method" shown above under the "Authorized Domains".
![image](https://user-images.githubusercontent.com/82501158/122659114-3dcfb000-d142-11eb-8822-a0baedd47e1f.png)
