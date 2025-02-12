import middy from '@middy/core'
import { ServiceDiscoveryClient } from '@aws-sdk/client-servicediscovery'
import { captureAWSClient } from 'aws-xray-sdk'
import { expectType } from 'tsd'
import serviceDiscovery, { Context } from '.'

// use with default options
expectType<middy.MiddlewareObj<unknown, any, Error, Context<undefined>>>(
  serviceDiscovery()
)

// use with all options
const options = {
  AwsClient: ServiceDiscoveryClient,
  awsClientOptions: {},
  awsClientCapture: captureAWSClient,
  disablePrefetch: true
}
expectType<middy.MiddlewareObj<unknown, any, Error, Context<typeof options>>>(
  serviceDiscovery()
)
