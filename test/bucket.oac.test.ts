import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { SecureCloudFrontOriginBucket, SecureCloudFrontOriginType } from '../src';

describe('SecureCloudFrontOriginBucket OAC Testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  const bucket = new SecureCloudFrontOriginBucket(stack, 'TestingBucket', {
    bucketName: 'origin-bucket',
    cloudFrontOriginType: SecureCloudFrontOriginType.ORIGIN_ACCESS_CONTROL,
    cloudFrontArn: 'arn:aws:cloudfront::123456789:distribution/DISTRIBUTIONID',
  });

  const template = Template.fromStack(stack);

  it('Is Bucket', () => {
    expect(bucket).toBeInstanceOf(s3.Bucket);
  });

  it('Allow from CloudFront Origin Access Control', () => {
    template.hasResourceProperties('AWS::S3::BucketPolicy', Match.objectEquals({
      Bucket: {
        Ref: Match.stringLikeRegexp('TestingBucket'),
      },
      PolicyDocument: Match.objectEquals({
        Version: '2012-10-17',
        Statement: Match.arrayEquals([
          Match.objectEquals({
            Action: 's3:GetObject',
            Effect: 'Allow',
            Principal: {
              Service: 'cloudfront.amazonaws.com',
            },
            Resource: {
              'Fn::Join': [
                '',
                [
                  {
                    'Fn::GetAtt': [
                      Match.stringLikeRegexp('TestingBucket'),
                      'Arn',
                    ],
                  },
                  '/*',
                ],
              ],
            },
            Condition: {
              StringEquals: {
                'AWS:SourceArn': 'arn:aws:cloudfront::123456789:distribution/DISTRIBUTIONID',
              },
            },
          }),
        ]),
      }),
    }));
  });

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });
});