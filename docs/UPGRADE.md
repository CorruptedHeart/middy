# Upgrade 1.x -> 2.x

See [CHANGELOG](/docs/CHANGELOG.md) for an overview of changes.

Version 2.x of Middy no longer supports Node.js versions 10.x. You are highly encouraged to move to Node.js 14, 
which support ES6 modules by default (`export`), optional chaining (`?.`) and nullish coalescing operator (`??`) natively.

## Core
- In handler `callback(err, reponse)` have been removed for `async/await` support
  - `return response` to trigger `after` middleware stack  
  - `throw new Error(...)` to trigger `onError` middleware stack
- In middleware `next(err)` has been removed for `async/await` support
  - `throw new Error(...)` to trigger `onError` middleware stack
  - `return reponse` to **short circuit** any middleware stack and respond. v1.x currently throws an error when something is returned

## Middleware
### cache
Deprecated. Too generic and had low usage.

### db-manager ** TODO add in external replacement
Deprecated. Too generic and had low usage.

### [do-not-wait-for-empty-event-loop](/packages/do-not-wait-for-empty-event-loop/README.md)
No change

### function-shield
Deprecated. Only supported up to Node v10.

### [http-content-negotiation](/packages/http-content-negotiation/README.md)
No change

### [http-cors](/packages/http-cors/README.md)
Added new options to support more headers
- methods
- exposeHeaders
- requestHeaders
- requestMethods

### [http-error-handler](/packages/http-error-handler/README.md)
Added new option to catch any non-http errors
- fallbackMessage

### [http-event-normalizer](/packages/http-event-normalizer/README.md)
No change

### [http-header-normalizer](/packages/http-header-normalizer/README.md)
No change

### [http-json-body-parser](/packages/http-json-body-parser/README.md)
No change

### [http-multipart-body-parser](/packages/http-multipart-body-parser/README.md)
No change

### [http-partial-response](/packages/http-partial-response/README.md)
No change

### [http-response-serializer](/packages/http-response-serializer/README.md)
No change

### [http-security-headers](/packages/http-security-headers/README.md)
No change

### [http-urlencode-body-parser](/packages/http-urlencode-body-parser/README.md)
Remove `extended` option. Only uses `qs` as the parser, formally enabled by options `{extended: true}`.

### [http-urlencode-path-parser](/packages/http-urlencode-path-parser/README.md)
No change

### [input-output-logger](/packages/input-output-logger/README.md)
Now additionally logs response from the `onError` middleware stack

### [rds-signer](/packages/rds-signer/README.md) ** TODO update after aws sdk supported
New middleware to fetch RDS credential used when connecting with IAM roles. This was built into `db-manager`.

### [s3-key-normalizer](/packages/s3-key-normalizer/README.md)
No change

### [secrets-manager](/packages/secrets-manager/README.md)
Refactored

### [sqs-json-body-parser](/packages/sqs-json-body-parser/README.md)
No change

### [sqs-partial-batch-failure](/packages/sqs-partial-batch-failure/README.md)
Replaced option `sqs` with `AwsClient` and added in more options for control.

### [ssm](/packages/ssm/README.md) ** TODO add in external replacement for ssm path support
Refactored. Removed ability to fetch values by path due to how the API worked and how that effected performance.

### [sts](/packages/sts/README.md)
New middleware to fetch assume role credentials.

### [validator](/packages/validator/README.md)
Upgraded `ajv` and it's plugins to support JSON Schema Draft 2019-09 specification. Defaults were change because of this.
- Plugin `ajv-keywords` removed from being included by default because it's quite a large package and usually only one keyword is used.
- Plugin `ajv-errors` removed from included by default because it conflicts with `ajv-i18n` when dealing with custom messages for multiple languages

Note: 
- `avj-errors` maybe be re-added back in before v2-alpha is released based on ajv v8 development. See https://github.com/ajv-validator/ajv-errors/issues/81 for discussion.

### warmup
Deprecated. This was a work round for a missing feature in AWS Lambda. AWS added in the ability to use [provisioned concurrency](https://aws.amazon.com/blogs/aws/new-provisioned-concurrency-for-lambda-functions/)
on 2019-12-03, removing the need for this work around.

However, you can use the following if needed:
```javascript
middy(handler)
  .before((handler) => {
    if (handler.event.source === 'serverless-plugin-warmup') {
      console.log('Exiting early via warmup Middleware')
      return 'warmup'
    }
  })
```


# Upgrade 0.x -> 1.x

## Independent packages structure

Version 1.x of Middy features decoupled independent packages published on npm under the `@middy` namespace. The core middleware engine has been moved to [`@middy/core`](https://www.npmjs.com/package/@middy/core) and all the other middlewares are moved into their own packages as well. This allows to only install the features that are needed and to keep your Lambda dependencies small. See the list below to check which packages you need based on the middlewares you use:

  - Core middleware functionality -> [`@middy/core`](https://www.npmjs.com/package/@middy/core)
  - `cache` -> [`@middy/cache`](https://www.npmjs.com/package/@middy/cache)
  - `cors` -> [`@middy/http-cors`](https://www.npmjs.com/package/@middy/http-cors)
  - `doNotWaitForEmptyEventLoop` -> [`@middy/do-not-wait-for-empty-event-loop`](https://www.npmjs.com/package/@middy/do-not-wait-for-empty-event-loop)
  - `httpContentNegotiation` ->  [`@middy/http-content-negotiation`](https://www.npmjs.com/package/@middy/http-content-negotiation)
  - `httpErrorHandler` ->  [`@middy/http-error-handler`](https://www.npmjs.com/package/@middy/http-error-handler)
  - `httpEventNormalizer` ->  [`@middy/http-event-normalizer`](https://www.npmjs.com/package/@middy/http-event-normalizer)
  - `httpHeaderNormalizer` ->  [`@middy/http-header-normalizer`](https://www.npmjs.com/package/@middy/http-header-normalizer)
  - `httpMultipartBodyParser` ->  [`@middy/http-json-body-parser`](https://www.npmjs.com/package/@middy/http-json-body-parser)
  - `httpPartialResponse` ->  [`@middy/http-partial-response`](https://www.npmjs.com/package/@middy/http-partial-response)
  - `jsonBodyParser` ->  [`@middy/http-json-body-parser`](https://www.npmjs.com/package/@middy/http-json-body-parser)
  - `s3KeyNormalizer` ->  [`@middy/s3-key-normalizer`](https://www.npmjs.com/package/@middy/s3-key-normalizer)
  - `secretsManager` ->  [`@middy/secrets-manager`](https://www.npmjs.com/package/@middy/secrets-manager)
  - `ssm` ->  [`@middy/ssm`](https://www.npmjs.com/package/@middy/ssm)
  - `validator` ->  [`@middy/validator`](https://www.npmjs.com/package/@middy/validator)
  - `urlEncodeBodyParser` ->  [`@middy/http-urlencode-body-parser`](https://www.npmjs.com/package/@middy/http-urlencode-body-parser)
  - `warmup` ->  [`@middy/warmup`](https://www.npmjs.com/package/@middy/warmup)


## Header normalization in `http-header-normalizer`

In Middy 0.x the `httpHeaderNormalizer` middleware normalizes HTTP header names into their own canonical format, for instance `Sec-WebSocket-Key` (notice the casing). In Middy 1.x this behavior has been changed to provide header names in lowercase format (e.g. `sec-webSocket-key`). This new behavior is more consistent with what Node.js core `http` package does and what other famous http frameworks like Express or Fastify do, so this is considered a more intuitive approach.
When updating to Middy 1.x, make sure you double check all your references to HTTP headers and switch to the lowercase version to read them.
All the middy core modules have been already updated to support the new format, so you should worry only about your userland code.


## Node.js 10 and 12 now supported / Node.js 6 and 8 now dropped

Version 1.x of Middy no longer supports Node.js versions 6.x and 8.x as these versions have been dropped by the AWS Lambda runtime itself and not supported anymore by the Node.js community. You are highly encouraged to move to Node.js 12 or 10, which are the new supported versions in Middy 1.x.