This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Configuration Requirements

This project uses AWS Cognito for authentication.
- You need to copy src/config-dummy.js to src/config.js
- Then you need to edit src/config.js and update:
  USER_POOL_ID: "ENTER_YOUR_USER_POOL_ID_HERE",
  APP_CLIENT_ID: "ENTER_YOUR_APP_CLIENT_ID_HERE"
These id's are available in the AWS web console under the Cognito service.
Or in the output of the

## Directory Structure
The Serverless API we are building! The [api directory](api/) contains five files.

- **[buildspec.yml](api/buildspec.yml):** This is used by CodeBuild in the build step of our pipeline.
- **[saml.yaml](api/saml.yaml):** This is the SAM template file that will be used to create our API gateway resource and Lambda function, hook them up together

## Available Scripts

In the project directory, you can run:

# `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

# `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

# `npm run eject`
