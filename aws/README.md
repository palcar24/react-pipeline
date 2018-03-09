## Directory Structure

The following files are use to enable the serverless app to be built and deployed.

# CloudFormation Templates

- **[saml.yaml]:** This is the SAM template file that will be used to create our API gateway resource and Lambda function, hook them up together.
You could really have any number of CloudFormation templates. Just reference them in buildspec.yml in the root of the repo.

- **[aws/cloudformation/pipline.yaml]:** This goes in your resources bucket
- **[aws/cloudformation/cognitoCustomUserPool.yaml]:** This goes in your resources bucket
- **[aws/lambda/cognitoCustomUserPool]:** This should be zipped up and This goes in your resources bucket
