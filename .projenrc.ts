import { awscdk, javascript } from 'projen';

const PROJECT_NAME = '@yicr/secure-cloudfront-origin-bucket';
const PROJECT_DESCRIPTION = 'AWS CloudFront distribution origin S3 bucket.';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.61.0',
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repositoryUrl: 'https://github.com/yicr/secure-cloudfront-origin-bucket.git',
  keywords: ['aws', 'cdk', 'cloudfront', 'cdn', 'web', 's3', 'bucket'],
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    '@yicr/secure-bucket',
  ],
  peerDeps: [
    '@yicr/secure-bucket',
  ],
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();