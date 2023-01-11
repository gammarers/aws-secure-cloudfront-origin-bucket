# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureCloudFrontOriginBucket <a name="SecureCloudFrontOriginBucket" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket"></a>

#### Initializers <a name="Initializers" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer"></a>

```typescript
import { SecureCloudFrontOriginBucket } from '@yicr/secure-cloudfront-origin-bucket'

new SecureCloudFrontOriginBucket(scope: Construct, id: string, props: SecureCloudFrontOriginBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer.parameter.props">props</a></code> | <code><a href="#@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps">SecureCloudFrontOriginBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps">SecureCloudFrontOriginBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.isConstruct"></a>

```typescript
import { SecureCloudFrontOriginBucket } from '@yicr/secure-cloudfront-origin-bucket'

SecureCloudFrontOriginBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucket.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---


## Structs <a name="Structs" id="Structs"></a>

### SecureCloudFrontOriginBucketProps <a name="SecureCloudFrontOriginBucketProps" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps"></a>

#### Initializer <a name="Initializer" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.Initializer"></a>

```typescript
import { SecureCloudFrontOriginBucketProps } from '@yicr/secure-cloudfront-origin-bucket'

const secureCloudFrontOriginBucketProps: SecureCloudFrontOriginBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.cloudFrontOriginAccessIdentityS3CanonicalUserId">cloudFrontOriginAccessIdentityS3CanonicalUserId</a></code> | <code>string</code> | *No description.* |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `cloudFrontOriginAccessIdentityS3CanonicalUserId`<sup>Required</sup> <a name="cloudFrontOriginAccessIdentityS3CanonicalUserId" id="@yicr/secure-cloudfront-origin-bucket.SecureCloudFrontOriginBucketProps.property.cloudFrontOriginAccessIdentityS3CanonicalUserId"></a>

```typescript
public readonly cloudFrontOriginAccessIdentityS3CanonicalUserId: string;
```

- *Type:* string

---



