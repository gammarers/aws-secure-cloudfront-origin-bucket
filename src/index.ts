import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface SecureCloudFrontOriginBucketProps {
  readonly bucketName: string;
  readonly cloudFrontOriginAccessIdentityS3CanonicalUserId: string;
}

export class SecureCloudFrontOriginBucket extends Construct {
  public bucket: s3.Bucket;
  constructor(scope: Construct, id: string, props: SecureCloudFrontOriginBucketProps) {
    super(scope, id);

    // 👇Create S3 Bucket
    this.bucket = new s3.Bucket(this, 'OriginBucket', {
      bucketName: props.bucketName,
      accessControl: s3.BucketAccessControl.PRIVATE,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      encryption: s3.BucketEncryption.S3_MANAGED, // Notice）Only S3 Manged
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      versioned: false,
    });

    // 👇Allow CloudFront access
    this.bucket.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['s3:GetObject'],
      principals: [
        new iam.CanonicalUserPrincipal(
          props.cloudFrontOriginAccessIdentityS3CanonicalUserId,
        ),
      ],
      resources: [`${this.bucket.bucketArn}/*`],
    }));
  }
}
