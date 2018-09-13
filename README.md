This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# What is this?
A set of scripts to kick start a serverless web application running in AWS.
Includes:
- reactjs, redux SPA served from an S3 bucket
  - Authentication by AWS Cognito built in.
- CI/CD Pipeline using CodePipeline and CodeBuildDeploySite

- Its still a WIP so check back for updates.

## Quick Start

The following link is the main cloudformation template to build everything.
It runs two nested stack called pipeline.yaml and cognitoCustomUserPool.yaml that are sourced in my S3Bucket.
[<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=ReactPipeline&amp;templateURL=https://s3.amazonaws.com/hayes-lambda/reactCICD.yaml)

### To initialize AWS from your own S3 Bucket
- create a resource S3 bucket
- copy aws/cloudformation/saml.yaml, aws/cloudformation/pipeline.yaml, and aws/cloudformation/cognitoCustomUserPool.yaml to resource S3 bucket
- In the AWS web console create a new cloudformation stack using aws/cloudformation/reactCICD.yaml
- reactCICD.yaml has a parameter called ResourceBucketName that must point to your S3 Bucket to initialize the nested stacks.

### For the reactjs web application

#### Running it locally
- You need to copy src/config-dummy.js to src/config.js
- Then you need to edit src/config.js and update:
  - USER_POOL_ID: "ENTER_YOUR_USER_POOL_ID_HERE",
  - APP_CLIENT_ID: "ENTER_YOUR_APP_CLIENT_ID_HERE"
- These id's are available in the AWS web console under the Cognito service.
Or from the output of the cognitoCustomUserPool.yaml template.
- clone the repo
- npm install
- npm start

#### Running it from the CI/CD PipelineUrl
- config.js is populated for you. Just run the cloudformation script.
[<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=ReactPipeline&amp;templateURL=https://s3.amazonaws.com/hayes-lambda/reactCICD.yaml)


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

Deployment occurs when a commit is made to the repo. Make sure you execute npm run build command before you commit.
This will trigger CodeDeploy to executes it build and deploy process. Which in turns copies the files from build/ to your S3 bucket that statically servers the content.

## TODO's

- Implement CloudFront to host content via HTTPS.
- About a million other ideas I have. Keep checking back.
