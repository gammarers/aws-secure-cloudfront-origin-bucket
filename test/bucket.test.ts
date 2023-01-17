import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { SecureCloudFrontOriginBucket } from '../src';


it('Is Bucket', () => {
  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const bucket = new SecureCloudFrontOriginBucket(stack, 'SecureCloudFrontOriginBucket', {
    bucketName: 'origin-bucket',
    cloudFrontOriginAccessIdentityS3CanonicalUserId: '',
  });
  expect(bucket).toBeInstanceOf(s3.Bucket);
  const assert = Template.fromStack(stack);
  assert.hasResource('AWS::S3::Bucket', {});
});

it('Has managed encrypted Bucket', () => {
  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  new SecureCloudFrontOriginBucket(stack, 'testing', {
    bucketName: 'origin-bucket',
    cloudFrontOriginAccessIdentityS3CanonicalUserId: '',
  });
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::S3::Bucket', {
    BucketEncryption: Match.objectEquals({
      ServerSideEncryptionConfiguration: [
        {
          ServerSideEncryptionByDefault: {
            SSEAlgorithm: 'AES256',
          },
        },
      ],
    }),
  });
});

it('Has BlockPublicAccess to BLOCK_ALL', () => {
  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  new SecureCloudFrontOriginBucket(stack, 'testing', {
    bucketName: 'origin-bucket',
    cloudFrontOriginAccessIdentityS3CanonicalUserId: '',
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::S3::Bucket', {
    PublicAccessBlockConfiguration: Match.objectEquals({
      BlockPublicAcls: true,
      BlockPublicPolicy: true,
      IgnorePublicAcls: true,
      RestrictPublicBuckets: true,
    }),
  });
});

it('Does not allow for unencrypted uploads', () => {
  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  new SecureCloudFrontOriginBucket(stack, 'TestingBucket', {
    bucketName: 'origin-bucket',
    cloudFrontOriginAccessIdentityS3CanonicalUserId: '',
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::S3::BucketPolicy', {
    Bucket: {
      Ref: Match.stringLikeRegexp('TestingBucket'),
    },
    PolicyDocument: {
      Version: '2012-10-17',
      Statement: Match.arrayWith([
        Match.objectLike({
          Action: 's3:*',
          Condition: {
            Bool: {
              'aws:SecureTransport': 'false',
            },
          },
          Effect: 'Deny',
          Principal: {
            AWS: '*',
          },
        }),
      ]),
    },
  });

});

it('Allow from CloudFront Origin Access Identity', () => {
  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  new SecureCloudFrontOriginBucket(stack, 'TestingBucket', {
    bucketName: 'origin-bucket',
    cloudFrontOriginAccessIdentityS3CanonicalUserId: 'CloudFront Origin Access Identity XXXXXXXXXXXXXX',
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::S3::BucketPolicy', {
    Bucket: {
      Ref: Match.stringLikeRegexp('TestingBucket'),
    },
    PolicyDocument: {
      Version: '2012-10-17',
      Statement: Match.arrayWith([
        Match.objectLike({
          Action: 's3:GetObject',
          Effect: 'Allow',
          Principal: {
            CanonicalUser: 'CloudFront Origin Access Identity XXXXXXXXXXXXXX',
          },
        }),
      ]),
    },
  });
});
