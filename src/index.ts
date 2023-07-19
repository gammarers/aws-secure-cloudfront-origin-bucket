import { SecureBucket, SecureBucketEncryption } from '@gammarer/aws-secure-bucket';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export interface SecureCloudFrontOriginBucketProps {
  readonly bucketName?: string;
  readonly cloudFrontOriginAccessIdentityS3CanonicalUserId: string;
}

export class SecureCloudFrontOriginBucket extends SecureBucket {

  constructor(scope: Construct, id: string, props: SecureCloudFrontOriginBucketProps) {
    super(scope, id, {
      bucketName: props.bucketName,
      encryption: SecureBucketEncryption.S3_MANAGED, // Notice）Only S3 Managed
      versioned: false,
    });

    // 👇Allow CloudFront access
    this.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['s3:GetObject'],
      principals: [
        new iam.CanonicalUserPrincipal(
          props.cloudFrontOriginAccessIdentityS3CanonicalUserId,
        ),
      ],
      resources: [`${this.bucketArn}/*`],
    }));
  }
}
