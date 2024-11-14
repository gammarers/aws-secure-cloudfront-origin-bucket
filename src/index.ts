import { SecureBucket, SecureBucketProps } from '@gammarers/aws-secure-bucket';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface SecureCloudFrontOriginBucketProps extends SecureBucketProps {}

export class SecureCloudFrontOriginBucket extends SecureBucket {

  constructor(scope: Construct, id: string, props: SecureCloudFrontOriginBucketProps) {
    super(scope, id, {
      ...props,
      encryption: s3.BucketEncryption.S3_MANAGED, // Notice）Only S3 Managed
      versioned: false,
    });
  }
}
