import { awscdk, javascript } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  authorOrganization: true,
  cdkVersion: '2.80.0',
  typescriptVersion: '5.3.x',
  jsiiVersion: '5.3.x',
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  name: '@gammarers/aws-secure-cloudfront-origin-bucket',
  description: 'AWS CloudFront distribution origin S3 bucket.',
  repositoryUrl: 'https://github.com/gammarers/aws-secure-cloudfront-origin-bucket.git',
  keywords: ['aws', 'cdk', 'cloudfront', 'cdn', 'web', 's3', 'bucket'],
  majorVersion: 1,
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    '@gammarers/aws-secure-bucket@~1.4.1',
  ],
  peerDeps: [
    '@gammarers/aws-secure-bucket@~1.4.1',
  ],
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '20.11.0',
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 18 * * 0']), // every sunday (JST/MON:03:00)
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarers.aws-secure-cloudfront-origin-bucket',
    module: 'gammarers.aws_secure_cloudfront_origin_bucket',
  },
  publishToNuget: {
    dotNetNamespace: 'Gammarers.CDK.AWS',
    packageId: 'Gammarers.CDK.AWS.SecureCloudFrontOriginBucket',
  },
});
project.synth();