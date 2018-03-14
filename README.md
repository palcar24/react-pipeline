This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# WIP CHECK BACK LATER

## Setup
Quick start

[<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=ReactPipeline=https://s3.amazonaws.com/hayes-lambda/reactCICD.yaml)

### To initialize AWS from your own S3 Bucket
- create a resource S3 bucket
- copy aws/cloudformation/saml.yaml, aws/cloudformation/pipeline.yaml, and aws/cloudformation/cognitoCustomUserPool.yaml to resource S3 bucket
- In the AWS web console create a new cloudformation stack using aws/cloudformation/reactCICD.yaml

### For the reactjs application
This project uses AWS Cognito for authentication.
- You need to copy src/config-dummy.js to src/config.js
- Then you need to edit src/config.js and update:
  - USER_POOL_ID: "ENTER_YOUR_USER_POOL_ID_HERE",
  - APP_CLIENT_ID: "ENTER_YOUR_APP_CLIENT_ID_HERE"
- These id's are available in the AWS web console under the Cognito service.
Or from the output of the cognitoCustomUserPool.yaml template.

## Directory Structure

- **[buildspec.yml]:** This is used by CodeBuild in the build step of our pipeline.
- aws directory contains CloudFormation and lambda functions.
- src directory contains the starter reactjs web application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

## Deployment

Deployment occurs when a commit is made to the repo. Make sure you run npm run build before you commit.
This will trigger CodeDeploy to executes it build and deploy process. Which in turns copies the files from build/ to you S3 bucket that statically servers the content.

## TODO's

- Implement CloudFront to host content via HTTPS.
- About a million other ideas I have. Keep checking back.
