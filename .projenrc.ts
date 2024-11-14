import { awscdk, javascript } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  authorOrganization: true,
  cdkVersion: '2.156.0',
  typescriptVersion: '5.5.x',
  jsiiVersion: '5.5.x',
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  name: '@gammarers/aws-secure-cloudfront-origin-bucket',
  description: 'AWS CloudFront distribution origin S3 bucket.',
  repositoryUrl: 'https://github.com/gammarers/aws-secure-cloudfront-origin-bucket.git',
  keywords: ['aws', 'cdk', 'cloudfront', 'cdn', 'web', 's3', 'bucket'],
  majorVersion: 2,
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    '@gammarers/aws-secure-bucket@^2.0.14',
  ],
  peerDeps: [
    '@gammarers/aws-secure-bucket@^2.0.14',
  ],
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '22.4.x',
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['11 17 * * 0']),
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
