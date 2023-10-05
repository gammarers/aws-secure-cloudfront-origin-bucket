import { awscdk, javascript } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  authorOrganization: true,
  cdkVersion: '2.80.0',
  typescriptVersion: '4.9.x',
  jsiiVersion: '~5.0.0',
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  name: '@gammarer/aws-secure-cloudfront-origin-bucket',
  description: 'AWS CloudFront distribution origin S3 bucket.',
  repositoryUrl: 'https://github.com/gammarer/aws-secure-cloudfront-origin-bucket.git',
  keywords: ['aws', 'cdk', 'cloudfront', 'cdn', 'web', 's3', 'bucket'],
  majorVersion: 1,
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    '@gammarer/aws-secure-bucket@~0.13.0',
  ],
  peerDeps: [
    '@gammarer/aws-secure-bucket@~0.13.0',
  ],
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '18.17.1',
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
    distName: 'gammarer.aws-secure-cloudfront-origin-bucket',
    module: 'gammarer.aws_secure_cloudfront_origin_bucket',
  },
  publishToMaven: {
    mavenGroupId: 'com.gammarer',
    javaPackage: 'com.gammarer.cdk.aws.secure_cloudfront_origin_bucket',
    mavenArtifactId: 'aws-secure-cloudfront-origin-bucket',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
  publishToNuget: {
    dotNetNamespace: 'Gammarer.CDK.AWS',
    packageId: 'Gammarer.CDK.AWS.SecureCloudFrontOriginBucket',
  },
});
project.synth();