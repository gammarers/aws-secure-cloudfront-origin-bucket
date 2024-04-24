import { SecureBucket, SecureBucketEncryption } from '@gammarers/aws-secure-bucket';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export enum SecureCloudFrontOriginType {
  /**
   * OriginAccessIdentity
   */
  ORIGIN_ACCESS_IDENTITY,

  /**
   * OriginAccessControl
   */
  ORIGIN_ACCESS_CONTROL,
}

interface BaseSecureCloudFrontOriginBucketProps {
  readonly bucketName?: string;
}

export interface SecureCloudFrontOriginAccessControlBucketProps extends BaseSecureCloudFrontOriginBucketProps {
  readonly cloudFrontOriginType: SecureCloudFrontOriginType.ORIGIN_ACCESS_CONTROL;
  readonly cloudFrontArn: string;
}

export interface SecureCloudFrontOriginAccessIdentityBucketProps extends BaseSecureCloudFrontOriginBucketProps {
  readonly cloudFrontOriginType: SecureCloudFrontOriginType.ORIGIN_ACCESS_IDENTITY;
  readonly cloudFrontOriginAccessIdentityS3CanonicalUserId: string;
}

export class SecureCloudFrontOriginBucket extends SecureBucket {

  constructor(scope: Construct, id: string, props: SecureCloudFrontOriginAccessControlBucketProps | SecureCloudFrontOriginAccessIdentityBucketProps) {
    super(scope, id, {
      bucketName: props.bucketName,
      encryption: SecureBucketEncryption.S3_MANAGED, // Notice）Only S3 Managed
      versioned: false,
    });

    // 👇　add BucketPolicy
    const bucketPolicy = new s3.BucketPolicy(scope, 'BucketPolicy', {
      bucket: this,
    });

    switch (props.cloudFrontOriginType) {
      case SecureCloudFrontOriginType.ORIGIN_ACCESS_CONTROL:
        // 👇 add bucket policy statement for cloud front origin access identity
        bucketPolicy.document.addStatements(new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['s3:GetObject'],
          principals: [
            new iam.ServicePrincipal('cloudfront.amazonaws.com'),
          ],
          resources: [`${this.bucketArn}/*`],
          conditions: {
            StringEquals: {
              'AWS:SourceArn': props.cloudFrontArn,
            },
          },
        }));
        break;
      case SecureCloudFrontOriginType.ORIGIN_ACCESS_IDENTITY:
        // 👇 add bucket policy statement for cloud front origin access identity
        bucketPolicy.document.addStatements(new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['s3:GetObject'],
          principals: [
            new iam.CanonicalUserPrincipal(
              props.cloudFrontOriginAccessIdentityS3CanonicalUserId,
            ),
          ],
          resources: [`${this.bucketArn}/*`],
        }));
        break;
    }
  }
}
