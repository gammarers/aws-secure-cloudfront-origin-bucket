# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureCloudFrontOriginBucket <a name="SecureCloudFrontOriginBucket" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer"></a>

```typescript
import { SecureCloudFrontOriginBucket } from '@gammarers/aws-secure-cloudfront-origin-bucket'

new SecureCloudFrontOriginBucket(scope: Construct, id: string, props: SecureCloudFrontOriginBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps">SecureCloudFrontOriginBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps">SecureCloudFrontOriginBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.enableEventBridgeNotification">enableEventBridgeNotification</a></code> | Enables event bridge notification, causing all events below to be sent to EventBridge:. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantPutAcl">grantPutAcl</a></code> | Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantRead">grantRead</a></code> | Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantReadWrite">grantReadWrite</a></code> | Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantWrite">grantWrite</a></code> | Grant write permissions to this bucket to an IAM principal. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.onCloudTrailPutObject">onCloudTrailPutObject</a></code> | Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.onCloudTrailWriteObject">onCloudTrailWriteObject</a></code> | Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.s3UrlForObject">s3UrlForObject</a></code> | The S3 URL of an S3 object. For example:. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.transferAccelerationUrlForObject">transferAccelerationUrlForObject</a></code> | The https Transfer Acceleration URL of an S3 object. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.urlForObject">urlForObject</a></code> | The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.virtualHostedUrlForObject">virtualHostedUrlForObject</a></code> | The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addCorsRule">addCorsRule</a></code> | Adds a cross-origin access configuration for objects in an Amazon S3 bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addInventory">addInventory</a></code> | Add an inventory configuration. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addLifecycleRule">addLifecycleRule</a></code> | Add a lifecycle rule to the bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addMetric">addMetric</a></code> | Adds a metrics configuration for the CloudWatch request metrics from the bucket. |

---

##### `toString` <a name="toString" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventNotification` <a name="addEventNotification" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addEventNotification"></a>

```typescript
public addEventNotification(event: EventType, dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Adds a bucket notification event destination.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html)

*Example*

```typescript
   declare const myLambda: lambda.Function;
   const bucket = new s3.Bucket(this, 'MyBucket');
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), {prefix: 'home/myusername/*'});
```


###### `event`<sup>Required</sup> <a name="event" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addEventNotification.parameter.event"></a>

- *Type:* aws-cdk-lib.aws_s3.EventType

The event to trigger the notification.

---

###### `dest`<sup>Required</sup> <a name="dest" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addEventNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (Lambda, SNS Topic or SQS Queue).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addEventNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

S3 object key filter rules to determine which objects trigger this event.

Each filter must include a `prefix` and/or `suffix`
that will be matched against the s3 object key. Refer to the S3 Developer Guide
for details about allowed filter rules.

---

##### `addObjectCreatedNotification` <a name="addObjectCreatedNotification" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addObjectCreatedNotification"></a>

```typescript
public addObjectCreatedNotification(dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Subscribes a destination to receive notifications when an object is created in the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_CREATED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addObjectCreatedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addObjectCreatedNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

Filters (see onEvent).

---

##### `addObjectRemovedNotification` <a name="addObjectRemovedNotification" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addObjectRemovedNotification"></a>

```typescript
public addObjectRemovedNotification(dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Subscribes a destination to receive notifications when an object is removed from the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_REMOVED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addObjectRemovedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addObjectRemovedNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

Filters (see onEvent).

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects.

Note that the policy statement may or may not be added to the policy.
For example, when an `IBucket` is created from an existing bucket,
it's not possible to tell whether the bucket already has a policy
attached, let alone to re-use that policy to add more statements to it.
So it's safest to do nothing in these cases.

###### `permission`<sup>Required</sup> <a name="permission" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the policy statement to be added to the bucket's policy.

---

##### `arnForObjects` <a name="arnForObjects" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.arnForObjects"></a>

```typescript
public arnForObjects(keyPattern: string): string
```

Returns an ARN that represents all objects within the bucket that match the key pattern specified.

To represent all keys, specify ``"*"``.

If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:

  arnForObjects(`home/${team}/${user}/*`)

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.arnForObjects.parameter.keyPattern"></a>

- *Type:* string

---

##### `enableEventBridgeNotification` <a name="enableEventBridgeNotification" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.enableEventBridgeNotification"></a>

```typescript
public enableEventBridgeNotification(): void
```

Enables event bridge notification, causing all events below to be sent to EventBridge:.

Object Deleted (DeleteObject)
- Object Deleted (Lifecycle expiration)
- Object Restore Initiated
- Object Restore Completed
- Object Restore Expired
- Object Storage Class Changed
- Object Access Tier Changed
- Object ACL Updated
- Object Tags Added
- Object Tags Deleted

##### `grantDelete` <a name="grantDelete" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantDelete"></a>

```typescript
public grantDelete(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket.

###### `identity`<sup>Required</sup> <a name="identity" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantPublicAccess` <a name="grantPublicAccess" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantPublicAccess"></a>

```typescript
public grantPublicAccess(allowedActions: ...string[], keyPrefix?: string): Grant
```

Allows unrestricted access to objects from this bucket.

IMPORTANT: This permission allows anyone to perform actions on S3 objects
in this bucket, which is useful for when you configure your bucket as a
website and want everyone to be able to read objects in the bucket without
needing to authenticate.

Without arguments, this method will grant read ("s3:GetObject") access to
all objects ("*") in the bucket.

The method returns the `iam.Grant` object, which can then be modified
as needed. For example, you can add a condition that will restrict access only
to an IPv4 range like this:

    const grant = bucket.grantPublicAccess();
    grant.resourceStatement!.addCondition(‘IpAddress’, { “aws:SourceIp”: “54.240.143.0/24” });

Note that if this `IBucket` refers to an existing bucket, possibly not
managed by CloudFormation, this method will have no effect, since it's
impossible to modify the policy of an existing bucket.

###### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantPublicAccess.parameter.allowedActions"></a>

- *Type:* ...string[]

the set of S3 actions to allow.

Default is "s3:GetObject".

---

###### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantPublicAccess.parameter.keyPrefix"></a>

- *Type:* string

the prefix of S3 object keys (e.g. `home/*`). Default is "*".

---

##### `grantPut` <a name="grantPut" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantPut"></a>

```typescript
public grantPut(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantPut.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantPut.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantPutAcl` <a name="grantPutAcl" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantPutAcl"></a>

```typescript
public grantPutAcl(identity: IGrantable, objectsKeyPattern?: string): Grant
```

Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket.

If your application has the '@aws-cdk/aws-s3:grantWriteWithoutAcl' feature flag set,
calling `grantWrite` or `grantReadWrite` no longer grants permissions to modify the ACLs of the objects;
in this case, if you need to modify object ACLs, call this method explicitly.

###### `identity`<sup>Required</sup> <a name="identity" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantPutAcl.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantPutAcl.parameter.objectsKeyPattern"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantRead"></a>

```typescript
public grantRead(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantRead.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantReadWrite` <a name="grantReadWrite" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantReadWrite"></a>

```typescript
public grantReadWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If an encryption key is used, permission to use the key for
encrypt/decrypt will also be granted.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantReadWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantReadWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `grantWrite` <a name="grantWrite" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantWrite"></a>

```typescript
public grantWrite(identity: IGrantable, objectsKeyPattern?: any, allowedActionPatterns?: string[]): Grant
```

Grant write permissions to this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

###### `allowedActionPatterns`<sup>Optional</sup> <a name="allowedActionPatterns" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.grantWrite.parameter.allowedActionPatterns"></a>

- *Type:* string[]

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailPutObject` <a name="onCloudTrailPutObject" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.onCloudTrailPutObject"></a>

```typescript
public onCloudTrailPutObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using `onCloudTrailWriteObject` may be preferable.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.onCloudTrailPutObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.onCloudTrailPutObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailWriteObject` <a name="onCloudTrailWriteObject" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.onCloudTrailWriteObject"></a>

```typescript
public onCloudTrailWriteObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to.

This includes
the events PutObject, CopyObject, and CompleteMultipartUpload.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using this method may be preferable to `onCloudTrailPutObject`.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.onCloudTrailWriteObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.onCloudTrailWriteObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `s3UrlForObject` <a name="s3UrlForObject" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.s3UrlForObject"></a>

```typescript
public s3UrlForObject(key?: string): string
```

The S3 URL of an S3 object. For example:.

`s3://onlybucket`
- `s3://bucket/key`

###### `key`<sup>Optional</sup> <a name="key" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.s3UrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the S3 URL of the
bucket is returned.

---

##### `transferAccelerationUrlForObject` <a name="transferAccelerationUrlForObject" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.transferAccelerationUrlForObject"></a>

```typescript
public transferAccelerationUrlForObject(key?: string, options?: TransferAccelerationUrlOptions): string
```

The https Transfer Acceleration URL of an S3 object.

Specify `dualStack: true` at the options
for dual-stack endpoint (connect to the bucket over IPv6). For example:

- `https://bucket.s3-accelerate.amazonaws.com`
- `https://bucket.s3-accelerate.amazonaws.com/key`

###### `key`<sup>Optional</sup> <a name="key" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.transferAccelerationUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.transferAccelerationUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.TransferAccelerationUrlOptions

Options for generating URL.

---

##### `urlForObject` <a name="urlForObject" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.urlForObject"></a>

```typescript
public urlForObject(key?: string): string
```

The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:.

`https://s3.us-west-1.amazonaws.com/onlybucket`
- `https://s3.us-west-1.amazonaws.com/bucket/key`
- `https://s3.cn-north-1.amazonaws.com.cn/china-bucket/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.urlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

##### `virtualHostedUrlForObject` <a name="virtualHostedUrlForObject" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.virtualHostedUrlForObject"></a>

```typescript
public virtualHostedUrlForObject(key?: string, options?: VirtualHostedStyleUrlOptions): string
```

The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:.

`https://only-bucket.s3.us-west-1.amazonaws.com`
- `https://bucket.s3.us-west-1.amazonaws.com/key`
- `https://bucket.s3.amazonaws.com/key`
- `https://china-bucket.s3.cn-north-1.amazonaws.com.cn/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.virtualHostedUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.virtualHostedUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.VirtualHostedStyleUrlOptions

Options for generating URL.

---

##### `addCorsRule` <a name="addCorsRule" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addCorsRule"></a>

```typescript
public addCorsRule(rule: CorsRule): void
```

Adds a cross-origin access configuration for objects in an Amazon S3 bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addCorsRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.CorsRule

The CORS configuration rule to add.

---

##### `addInventory` <a name="addInventory" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addInventory"></a>

```typescript
public addInventory(inventory: Inventory): void
```

Add an inventory configuration.

###### `inventory`<sup>Required</sup> <a name="inventory" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addInventory.parameter.inventory"></a>

- *Type:* aws-cdk-lib.aws_s3.Inventory

configuration to add.

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a lifecycle rule to the bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule

The rule to add.

---

##### `addMetric` <a name="addMetric" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addMetric"></a>

```typescript
public addMetric(metric: BucketMetrics): void
```

Adds a metrics configuration for the CloudWatch request metrics from the bucket.

###### `metric`<sup>Required</sup> <a name="metric" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.addMetric.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics

The metric configuration to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketArn">fromBucketArn</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketAttributes">fromBucketAttributes</a></code> | Creates a Bucket construct that represents an external bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketName">fromBucketName</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromCfnBucket">fromCfnBucket</a></code> | Create a mutable `IBucket` based on a low-level `CfnBucket`. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.validateBucketName">validateBucketName</a></code> | Thrown an exception if the given bucket name is not valid. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.isConstruct"></a>

```typescript
import { SecureCloudFrontOriginBucket } from '@gammarers/aws-secure-cloudfront-origin-bucket'

SecureCloudFrontOriginBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.isOwnedResource"></a>

```typescript
import { SecureCloudFrontOriginBucket } from '@gammarers/aws-secure-cloudfront-origin-bucket'

SecureCloudFrontOriginBucket.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.isResource"></a>

```typescript
import { SecureCloudFrontOriginBucket } from '@gammarers/aws-secure-cloudfront-origin-bucket'

SecureCloudFrontOriginBucket.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromBucketArn` <a name="fromBucketArn" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketArn"></a>

```typescript
import { SecureCloudFrontOriginBucket } from '@gammarers/aws-secure-cloudfront-origin-bucket'

SecureCloudFrontOriginBucket.fromBucketArn(scope: Construct, id: string, bucketArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketArn.parameter.id"></a>

- *Type:* string

---

###### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketArn.parameter.bucketArn"></a>

- *Type:* string

---

##### `fromBucketAttributes` <a name="fromBucketAttributes" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketAttributes"></a>

```typescript
import { SecureCloudFrontOriginBucket } from '@gammarers/aws-secure-cloudfront-origin-bucket'

SecureCloudFrontOriginBucket.fromBucketAttributes(scope: Construct, id: string, attrs: BucketAttributes)
```

Creates a Bucket construct that represents an external bucket.

###### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketAttributes

A `BucketAttributes` object.

Can be obtained from a call to
`bucket.export()` or manually created.

---

##### `fromBucketName` <a name="fromBucketName" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketName"></a>

```typescript
import { SecureCloudFrontOriginBucket } from '@gammarers/aws-secure-cloudfront-origin-bucket'

SecureCloudFrontOriginBucket.fromBucketName(scope: Construct, id: string, bucketName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketName.parameter.id"></a>

- *Type:* string

---

###### `bucketName`<sup>Required</sup> <a name="bucketName" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromBucketName.parameter.bucketName"></a>

- *Type:* string

---

##### `fromCfnBucket` <a name="fromCfnBucket" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromCfnBucket"></a>

```typescript
import { SecureCloudFrontOriginBucket } from '@gammarers/aws-secure-cloudfront-origin-bucket'

SecureCloudFrontOriginBucket.fromCfnBucket(cfnBucket: CfnBucket)
```

Create a mutable `IBucket` based on a low-level `CfnBucket`.

###### `cfnBucket`<sup>Required</sup> <a name="cfnBucket" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.fromCfnBucket.parameter.cfnBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.CfnBucket

---

##### `validateBucketName` <a name="validateBucketName" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.validateBucketName"></a>

```typescript
import { SecureCloudFrontOriginBucket } from '@gammarers/aws-secure-cloudfront-origin-bucket'

SecureCloudFrontOriginBucket.validateBucketName(physicalName: string, allowLegacyBucketNaming?: boolean)
```

Thrown an exception if the given bucket name is not valid.

###### `physicalName`<sup>Required</sup> <a name="physicalName" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.validateBucketName.parameter.physicalName"></a>

- *Type:* string

name of the bucket.

---

###### `allowLegacyBucketNaming`<sup>Optional</sup> <a name="allowLegacyBucketNaming" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.validateBucketName.parameter.allowLegacyBucketNaming"></a>

- *Type:* boolean

allow legacy bucket naming style, default is false.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_s3.BucketPolicy</code> | The resource policy associated with this bucket. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the bucket.

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

The IPv4 DNS name of the specified bucket.

---

##### `bucketDualStackDomainName`<sup>Required</sup> <a name="bucketDualStackDomainName" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketDualStackDomainName"></a>

```typescript
public readonly bucketDualStackDomainName: string;
```

- *Type:* string

The IPv6 DNS name of the specified bucket.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket.

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

The regional domain name of the specified bucket.

---

##### `bucketWebsiteDomainName`<sup>Required</sup> <a name="bucketWebsiteDomainName" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketWebsiteDomainName"></a>

```typescript
public readonly bucketWebsiteDomainName: string;
```

- *Type:* string

The Domain name of the static website.

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

The URL of the static website.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Optional KMS encryption key associated with this bucket.

---

##### `isWebsite`<sup>Optional</sup> <a name="isWebsite" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.isWebsite"></a>

```typescript
public readonly isWebsite: boolean;
```

- *Type:* boolean

If this bucket has been configured for static website hosting.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.policy"></a>

```typescript
public readonly policy: BucketPolicy;
```

- *Type:* aws-cdk-lib.aws_s3.BucketPolicy

The resource policy associated with this bucket.

If `autoCreatePolicy` is true, a `BucketPolicy` will be created upon the
first call to addToResourcePolicy(s).

---


## Structs <a name="Structs" id="Structs"></a>

### SecureCloudFrontOriginBucketProps <a name="SecureCloudFrontOriginBucketProps" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.Initializer"></a>

```typescript
import { SecureCloudFrontOriginBucketProps } from '@gammarers/aws-secure-cloudfront-origin-bucket'

const secureCloudFrontOriginBucketProps: SecureCloudFrontOriginBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.accessControl">accessControl</a></code> | <code>aws-cdk-lib.aws_s3.BucketAccessControl</code> | Specifies a canned ACL that grants predefined permissions to the bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.autoDeleteObjects">autoDeleteObjects</a></code> | <code>boolean</code> | Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.blockPublicAccess">blockPublicAccess</a></code> | <code>aws-cdk-lib.aws_s3.BlockPublicAccess</code> | The block public access configuration of this bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean</code> | Whether Amazon S3 should use its own intermediary key to generate data keys. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | Physical name of this bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.cors">cors</a></code> | <code>aws-cdk-lib.aws_s3.CorsRule[]</code> | The CORS configuration of this bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.encryption">encryption</a></code> | <code>aws-cdk-lib.aws_s3.BucketEncryption</code> | The kind of server-side encryption to apply to this bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | External KMS key to use for bucket encryption. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.enforceSSL">enforceSSL</a></code> | <code>boolean</code> | Enforces SSL for requests. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.eventBridgeEnabled">eventBridgeEnabled</a></code> | <code>boolean</code> | Whether this bucket should send notifications to Amazon EventBridge or not. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.intelligentTieringConfigurations">intelligentTieringConfigurations</a></code> | <code>aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]</code> | Inteligent Tiering Configurations. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.inventories">inventories</a></code> | <code>aws-cdk-lib.aws_s3.Inventory[]</code> | The inventory configuration of the bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.lifecycleRules">lifecycleRules</a></code> | <code>aws-cdk-lib.aws_s3.LifecycleRule[]</code> | Rules that define how Amazon S3 manages objects during their lifetime. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.metrics">metrics</a></code> | <code>aws-cdk-lib.aws_s3.BucketMetrics[]</code> | The metrics configuration of this bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.minimumTLSVersion">minimumTLSVersion</a></code> | <code>number</code> | Enforces minimum TLS version for requests. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.notificationsHandlerRole">notificationsHandlerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role to be used by the notifications handler. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.notificationsSkipDestinationValidation">notificationsSkipDestinationValidation</a></code> | <code>boolean</code> | Skips notification validation of Amazon SQS, Amazon SNS, and Lambda destinations. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.objectLockDefaultRetention">objectLockDefaultRetention</a></code> | <code>aws-cdk-lib.aws_s3.ObjectLockRetention</code> | The default retention mode and rules for S3 Object Lock. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.objectLockEnabled">objectLockEnabled</a></code> | <code>boolean</code> | Enable object lock on the bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.objectOwnership">objectOwnership</a></code> | <code>aws-cdk-lib.aws_s3.ObjectOwnership</code> | The objectOwnership of the bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.publicReadAccess">publicReadAccess</a></code> | <code>boolean</code> | Grants public read access to all objects in the bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the bucket is removed from this stack. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.serverAccessLogsBucket">serverAccessLogsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Destination bucket for the server access logs. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.serverAccessLogsPrefix">serverAccessLogsPrefix</a></code> | <code>string</code> | Optional log file prefix to use for the bucket's access logs. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.targetObjectKeyFormat">targetObjectKeyFormat</a></code> | <code>aws-cdk-lib.aws_s3.TargetObjectKeyFormat</code> | Optional key format for log objects. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.transferAcceleration">transferAcceleration</a></code> | <code>boolean</code> | Whether this bucket should have transfer acceleration turned on or not. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.versioned">versioned</a></code> | <code>boolean</code> | Whether this bucket should have versioning turned on or not. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.websiteErrorDocument">websiteErrorDocument</a></code> | <code>string</code> | The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.websiteIndexDocument">websiteIndexDocument</a></code> | <code>string</code> | The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.websiteRedirect">websiteRedirect</a></code> | <code>aws-cdk-lib.aws_s3.RedirectTarget</code> | Specifies the redirect behavior of all requests to a website endpoint of a bucket. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.websiteRoutingRules">websiteRoutingRules</a></code> | <code>aws-cdk-lib.aws_s3.RoutingRule[]</code> | Rules that define when a redirect is applied and the redirect behavior. |
| <code><a href="#@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.isPipelineArtifactBucket">isPipelineArtifactBucket</a></code> | <code>boolean</code> | If you are setting a custom Qualifier and using it as the artifact bucket for the CDK pipeline, set it to true. |

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.accessControl"></a>

```typescript
public readonly accessControl: BucketAccessControl;
```

- *Type:* aws-cdk-lib.aws_s3.BucketAccessControl
- *Default:* BucketAccessControl.PRIVATE

Specifies a canned ACL that grants predefined permissions to the bucket.

---

##### `autoDeleteObjects`<sup>Optional</sup> <a name="autoDeleteObjects" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.autoDeleteObjects"></a>

```typescript
public readonly autoDeleteObjects: boolean;
```

- *Type:* boolean
- *Default:* false

Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted.

Requires the `removalPolicy` to be set to `RemovalPolicy.DESTROY`.

**Warning** if you have deployed a bucket with `autoDeleteObjects: true`,
switching this to `false` in a CDK version *before* `1.126.0` will lead to
all objects in the bucket being deleted. Be sure to update your bucket resources
by deploying with CDK version `1.126.0` or later **before** switching this value to `false`.

Setting `autoDeleteObjects` to true on a bucket will add `s3:PutBucketPolicy` to the
bucket policy. This is because during bucket deletion, the custom resource provider
needs to update the bucket policy by adding a deny policy for `s3:PutObject` to
prevent race conditions with external bucket writers.

---

##### `blockPublicAccess`<sup>Optional</sup> <a name="blockPublicAccess" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.blockPublicAccess"></a>

```typescript
public readonly blockPublicAccess: BlockPublicAccess;
```

- *Type:* aws-cdk-lib.aws_s3.BlockPublicAccess
- *Default:* CloudFormation defaults will apply. New buckets and objects don't allow public access, but users can modify bucket policies or object permissions to allow public access

The block public access configuration of this bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html)

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether Amazon S3 should use its own intermediary key to generate data keys.

Only relevant when using KMS for encryption.

- If not enabled, every object GET and PUT will cause an API call to KMS (with the
  attendant cost implications of that).
- If enabled, S3 will use its own time-limited key instead.

Only relevant, when Encryption is not set to `BucketEncryption.UNENCRYPTED`.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* Assigned by CloudFormation (recommended).

Physical name of this bucket.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.cors"></a>

```typescript
public readonly cors: CorsRule[];
```

- *Type:* aws-cdk-lib.aws_s3.CorsRule[]
- *Default:* No CORS configuration.

The CORS configuration of this bucket.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html)

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.encryption"></a>

```typescript
public readonly encryption: BucketEncryption;
```

- *Type:* aws-cdk-lib.aws_s3.BucketEncryption
- *Default:* `KMS` if `encryptionKey` is specified, or `UNENCRYPTED` otherwise. But if `UNENCRYPTED` is specified, the bucket will be encrypted as `S3_MANAGED` automatically.

The kind of server-side encryption to apply to this bucket.

If you choose KMS, you can specify a KMS key via `encryptionKey`. If
encryption key is not specified, a key will automatically be created.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* If `encryption` is set to `KMS` and this property is undefined, a new KMS key will be created and associated with this bucket.

External KMS key to use for bucket encryption.

The `encryption` property must be either not specified or set to `KMS` or `DSSE`.
An error will be emitted if `encryption` is set to `UNENCRYPTED` or `S3_MANAGED`.

---

##### `enforceSSL`<sup>Optional</sup> <a name="enforceSSL" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.enforceSSL"></a>

```typescript
public readonly enforceSSL: boolean;
```

- *Type:* boolean
- *Default:* false

Enforces SSL for requests.

S3.5 of the AWS Foundational Security Best Practices Regarding S3.

> [https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html)

---

##### `eventBridgeEnabled`<sup>Optional</sup> <a name="eventBridgeEnabled" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.eventBridgeEnabled"></a>

```typescript
public readonly eventBridgeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should send notifications to Amazon EventBridge or not.

---

##### `intelligentTieringConfigurations`<sup>Optional</sup> <a name="intelligentTieringConfigurations" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.intelligentTieringConfigurations"></a>

```typescript
public readonly intelligentTieringConfigurations: IntelligentTieringConfiguration[];
```

- *Type:* aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]
- *Default:* No Intelligent Tiiering Configurations.

Inteligent Tiering Configurations.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html)

---

##### `inventories`<sup>Optional</sup> <a name="inventories" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.inventories"></a>

```typescript
public readonly inventories: Inventory[];
```

- *Type:* aws-cdk-lib.aws_s3.Inventory[]
- *Default:* No inventory configuration

The inventory configuration of the bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html)

---

##### `lifecycleRules`<sup>Optional</sup> <a name="lifecycleRules" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.lifecycleRules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule[]
- *Default:* No lifecycle rules.

Rules that define how Amazon S3 manages objects during their lifetime.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.metrics"></a>

```typescript
public readonly metrics: BucketMetrics[];
```

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics[]
- *Default:* No metrics configuration.

The metrics configuration of this bucket.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html)

---

##### `minimumTLSVersion`<sup>Optional</sup> <a name="minimumTLSVersion" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.minimumTLSVersion"></a>

```typescript
public readonly minimumTLSVersion: number;
```

- *Type:* number
- *Default:* No minimum TLS version is enforced.

Enforces minimum TLS version for requests.

Requires `enforceSSL` to be enabled.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-tls-version](https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-tls-version)

---

##### `notificationsHandlerRole`<sup>Optional</sup> <a name="notificationsHandlerRole" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.notificationsHandlerRole"></a>

```typescript
public readonly notificationsHandlerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a new role will be created.

The role to be used by the notifications handler.

---

##### `notificationsSkipDestinationValidation`<sup>Optional</sup> <a name="notificationsSkipDestinationValidation" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.notificationsSkipDestinationValidation"></a>

```typescript
public readonly notificationsSkipDestinationValidation: boolean;
```

- *Type:* boolean
- *Default:* false

Skips notification validation of Amazon SQS, Amazon SNS, and Lambda destinations.

---

##### `objectLockDefaultRetention`<sup>Optional</sup> <a name="objectLockDefaultRetention" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.objectLockDefaultRetention"></a>

```typescript
public readonly objectLockDefaultRetention: ObjectLockRetention;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectLockRetention
- *Default:* no default retention period

The default retention mode and rules for S3 Object Lock.

Default retention can be configured after a bucket is created if the bucket already
has object lock enabled. Enabling object lock for existing buckets is not supported.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable)

---

##### `objectLockEnabled`<sup>Optional</sup> <a name="objectLockEnabled" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: boolean;
```

- *Type:* boolean
- *Default:* false, unless objectLockDefaultRetention is set (then, true)

Enable object lock on the bucket.

Enabling object lock for existing buckets is not supported. Object lock must be
enabled when the bucket is created.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable)

---

##### `objectOwnership`<sup>Optional</sup> <a name="objectOwnership" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.objectOwnership"></a>

```typescript
public readonly objectOwnership: ObjectOwnership;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectOwnership
- *Default:* No ObjectOwnership configuration. By default, Amazon S3 sets Object Ownership to `Bucket owner enforced`. This means ACLs are disabled and the bucket owner will own every object.

The objectOwnership of the bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html)

---

##### `publicReadAccess`<sup>Optional</sup> <a name="publicReadAccess" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.publicReadAccess"></a>

```typescript
public readonly publicReadAccess: boolean;
```

- *Type:* boolean
- *Default:* false

Grants public read access to all objects in the bucket.

Similar to calling `bucket.grantPublicAccess()`

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The bucket will be orphaned.

Policy to apply when the bucket is removed from this stack.

---

##### `serverAccessLogsBucket`<sup>Optional</sup> <a name="serverAccessLogsBucket" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.serverAccessLogsBucket"></a>

```typescript
public readonly serverAccessLogsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* If "serverAccessLogsPrefix" undefined - access logs disabled, otherwise - log to current bucket.

Destination bucket for the server access logs.

---

##### `serverAccessLogsPrefix`<sup>Optional</sup> <a name="serverAccessLogsPrefix" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.serverAccessLogsPrefix"></a>

```typescript
public readonly serverAccessLogsPrefix: string;
```

- *Type:* string
- *Default:* No log file prefix

Optional log file prefix to use for the bucket's access logs.

If defined without "serverAccessLogsBucket", enables access logs to current bucket with this prefix.

---

##### `targetObjectKeyFormat`<sup>Optional</sup> <a name="targetObjectKeyFormat" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.targetObjectKeyFormat"></a>

```typescript
public readonly targetObjectKeyFormat: TargetObjectKeyFormat;
```

- *Type:* aws-cdk-lib.aws_s3.TargetObjectKeyFormat
- *Default:* the default key format is: [DestinationPrefix][YYYY]-[MM]-[DD]-[hh]-[mm]-[ss]-[UniqueString]

Optional key format for log objects.

---

##### `transferAcceleration`<sup>Optional</sup> <a name="transferAcceleration" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.transferAcceleration"></a>

```typescript
public readonly transferAcceleration: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should have transfer acceleration turned on or not.

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.versioned"></a>

```typescript
public readonly versioned: boolean;
```

- *Type:* boolean
- *Default:* false (unless object lock is enabled, then true)

Whether this bucket should have versioning turned on or not.

---

##### `websiteErrorDocument`<sup>Optional</sup> <a name="websiteErrorDocument" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.websiteErrorDocument"></a>

```typescript
public readonly websiteErrorDocument: string;
```

- *Type:* string
- *Default:* No error document.

The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set.

---

##### `websiteIndexDocument`<sup>Optional</sup> <a name="websiteIndexDocument" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.websiteIndexDocument"></a>

```typescript
public readonly websiteIndexDocument: string;
```

- *Type:* string
- *Default:* No index document.

The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: RedirectTarget;
```

- *Type:* aws-cdk-lib.aws_s3.RedirectTarget
- *Default:* No redirection.

Specifies the redirect behavior of all requests to a website endpoint of a bucket.

If you specify this property, you can't specify "websiteIndexDocument", "websiteErrorDocument" nor , "websiteRoutingRules".

---

##### `websiteRoutingRules`<sup>Optional</sup> <a name="websiteRoutingRules" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.websiteRoutingRules"></a>

```typescript
public readonly websiteRoutingRules: RoutingRule[];
```

- *Type:* aws-cdk-lib.aws_s3.RoutingRule[]
- *Default:* No redirection rules.

Rules that define when a redirect is applied and the redirect behavior.

---

##### `isPipelineArtifactBucket`<sup>Optional</sup> <a name="isPipelineArtifactBucket" id="@gammarers/aws-secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.isPipelineArtifactBucket"></a>

```typescript
public readonly isPipelineArtifactBucket: boolean;
```

- *Type:* boolean
- *Default:* false

If you are setting a custom Qualifier and using it as the artifact bucket for the CDK pipeline, set it to true.

---



