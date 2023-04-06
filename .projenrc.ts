import { awscdk, javascript } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.61.0',
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  name: '@yicr/aws-secure-cloudfront-origin-bucket',
  description: 'AWS CloudFront distribution origin S3 bucket.',
  repositoryUrl: 'https://github.com/yicr/aws-secure-cloudfront-origin-bucket.git',
  keywords: ['aws', 'cdk', 'cloudfront', 'cdn', 'web', 's3', 'bucket'],
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    '@yicr/aws-secure-bucket',
  ],
  peerDeps: [
    '@yicr/aws-secure-bucket',
  ],
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '16.19.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 18 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();