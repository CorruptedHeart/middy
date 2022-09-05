"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[711],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(r),h=n,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7124:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"Upgrade 1.x -> 2.x",sidebar_position:1e3},s=void 0,d={unversionedId:"upgrade/1-2",id:"upgrade/1-2",title:"Upgrade 1.x -> 2.x",description:"Version 2.x of Middy no longer supports Node.js versions 10.x. You are highly encouraged to move to Node.js 14.x,",source:"@site/docs/upgrade/1-2.md",sourceDirName:"upgrade",slug:"/upgrade/1-2",permalink:"/docs/upgrade/1-2",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/upgrade/1-2.md",tags:[],version:"current",lastUpdatedAt:1662418431,formattedLastUpdatedAt:"9/5/2022",sidebarPosition:1e3,frontMatter:{title:"Upgrade 1.x -> 2.x",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Upgrade 2.x -> 3.x",permalink:"/docs/upgrade/2-3"},next:{title:"Upgrade 0.x -> 1.x",permalink:"/docs/upgrade/0-1"}},p={},u=[{value:"Core",id:"core",level:2},{value:"Middleware",id:"middleware",level:2},{value:"cache",id:"cache",level:3},{value:"db-manager",id:"db-manager",level:3},{value:"do-not-wait-for-empty-event-loop",id:"do-not-wait-for-empty-event-loop",level:3},{value:"function-shield",id:"function-shield",level:3},{value:"http-content-negotiation",id:"http-content-negotiation",level:3},{value:"http-cors",id:"http-cors",level:3},{value:"http-error-handler",id:"http-error-handler",level:3},{value:"http-event-normalizer",id:"http-event-normalizer",level:3},{value:"http-header-normalizer",id:"http-header-normalizer",level:3},{value:"http-json-body-parser",id:"http-json-body-parser",level:3},{value:"http-multipart-body-parser",id:"http-multipart-body-parser",level:3},{value:"http-partial-response",id:"http-partial-response",level:3},{value:"http-response-serializer",id:"http-response-serializer",level:3},{value:"http-security-headers",id:"http-security-headers",level:3},{value:"http-urlencode-body-parser",id:"http-urlencode-body-parser",level:3},{value:"http-urlencode-path-parser",id:"http-urlencode-path-parser",level:3},{value:"input-output-logger",id:"input-output-logger",level:3},{value:"rds-signer",id:"rds-signer",level:3},{value:"s3-key-normalizer",id:"s3-key-normalizer",level:3},{value:"s3-object-response",id:"s3-object-response",level:3},{value:"secrets-manager",id:"secrets-manager",level:3},{value:"sqs-json-body-parser",id:"sqs-json-body-parser",level:3},{value:"sqs-partial-batch-failure",id:"sqs-partial-batch-failure",level:3},{value:"ssm",id:"ssm",level:3},{value:"sts",id:"sts",level:3},{value:"validator",id:"validator",level:3},{value:"warmup",id:"warmup",level:3}],c={toc:u};function h(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Version 2.x of Middy no longer supports Node.js versions 10.x. You are highly encouraged to move to Node.js 14.x,\nwhich support ES6 modules by default (",(0,o.kt)("inlineCode",{parentName:"p"},"export"),"), optional chaining (",(0,o.kt)("inlineCode",{parentName:"p"},"?."),") and nullish coalescing operator (",(0,o.kt)("inlineCode",{parentName:"p"},"??"),") natively."),(0,o.kt)("h2",{id:"core"},"Core"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In handler ",(0,o.kt)("inlineCode",{parentName:"li"},"callback(err, response)")," have been removed for ",(0,o.kt)("inlineCode",{parentName:"li"},"async/await")," support",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"return response")," to trigger ",(0,o.kt)("inlineCode",{parentName:"li"},"after")," middleware stack"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"throw new Error(...)")," to trigger ",(0,o.kt)("inlineCode",{parentName:"li"},"onError")," middleware stack"))),(0,o.kt)("li",{parentName:"ul"},"In middleware ",(0,o.kt)("inlineCode",{parentName:"li"},"next(err)")," has been removed for ",(0,o.kt)("inlineCode",{parentName:"li"},"async/await")," support",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"throw new Error(...)")," to trigger ",(0,o.kt)("inlineCode",{parentName:"li"},"onError")," middleware stack"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"return response")," to ",(0,o.kt)("strong",{parentName:"li"},"short circuit")," any middleware stack and respond. v1.x currently throws an error when something is returned")))),(0,o.kt)("h2",{id:"middleware"},"Middleware"),(0,o.kt)("h3",{id:"cache"},"cache"),(0,o.kt)("p",null,"Deprecated. Too generic and had low usage."),(0,o.kt)("p",null,"However, you can use the following if needed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { createHash } = require('crypto')\n\nmodule.exports = (opts) => {\n  const storage = {}\n  const defaults = {\n    calculateCacheId: async (event) => createHash('md5').update(JSON.stringify(event)).digest('hex'),\n    getValue: async (key) => storage[key],\n    setValue: async (key, value) => {\n      storage[key] = value\n    }\n  }\n\n  const options = { ...defaults, ...opts }\n  let currentCacheKey\n\n  const cacheMiddlewareBefore = async (request) => {\n    const cacheKey = await options.calculateCacheId(request.event)\n    const response = await options.getValue(cacheKey)\n    if (response) {\n      return response\n    }\n    request.internal.cacheKey = cacheKey\n  }\n\n  const cacheMiddlewareAfter = async (request) => {\n    await options.setValue(request.internal.cacheKey, request.response)\n  }\n  \n  return {\n    before: cacheMiddlewareBefore,\n    after: cacheMiddlewareAfter\n  }\n}\n")),(0,o.kt)("h3",{id:"db-manager"},"db-manager"),(0,o.kt)("p",null,"Deprecated. Too generic and had low usage. You can check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/willfarrell/middy-rds"},"middy-rds")," as a\npossible alternative or example on building your own replacement."),(0,o.kt)("h3",{id:"do-not-wait-for-empty-event-loop"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/do-not-wait-for-empty-event-loop"},"do-not-wait-for-empty-event-loop")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"function-shield"},"function-shield"),(0,o.kt)("p",null,"Deprecated. Only supported up to Node v10."),(0,o.kt)("h3",{id:"http-content-negotiation"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-content-negotiation"},"http-content-negotiation")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-cors"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-cors"},"http-cors")),(0,o.kt)("p",null,"Added new options to support more headers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"methods"),(0,o.kt)("li",{parentName:"ul"},"exposeHeaders"),(0,o.kt)("li",{parentName:"ul"},"requestHeaders"),(0,o.kt)("li",{parentName:"ul"},"requestMethods")),(0,o.kt)("h3",{id:"http-error-handler"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-error-handler"},"http-error-handler")),(0,o.kt)("p",null,"Added in support to honour httpError.expose. Errors with statusCode >= 500 are no longer applied to response by default.\nAdded new option to catch any non-http and statusCode >= 500 errors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fallbackMessage")),(0,o.kt)("h3",{id:"http-event-normalizer"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-event-normalizer"},"http-event-normalizer")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-header-normalizer"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-header-normalizer"},"http-header-normalizer")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-json-body-parser"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-json-body-parser"},"http-json-body-parser")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-multipart-body-parser"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-multipart-body-parser"},"http-multipart-body-parser")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-partial-response"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-partial-response"},"http-partial-response")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-response-serializer"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-response-serializer"},"http-response-serializer")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-security-headers"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-security-headers"},"http-security-headers")),(0,o.kt)("p",null,"No longer adds ",(0,o.kt)("inlineCode",{parentName:"p"},"statusCode:500")," when there is no response."),(0,o.kt)("h3",{id:"http-urlencode-body-parser"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-urlencode-body-parser"},"http-urlencode-body-parser")),(0,o.kt)("p",null,"Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"extended")," option. Only uses ",(0,o.kt)("inlineCode",{parentName:"p"},"qs")," as the parser, formally enabled by options ",(0,o.kt)("inlineCode",{parentName:"p"},"{extended: true}"),"."),(0,o.kt)("h3",{id:"http-urlencode-path-parser"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-urlencode-path-parser"},"http-urlencode-path-parser")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"input-output-logger"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/input-output-logger"},"input-output-logger")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now additionally logs response from the ",(0,o.kt)("inlineCode",{parentName:"li"},"onError")," middleware stack"),(0,o.kt)("li",{parentName:"ul"},"Support for omiting within nested arrays"),(0,o.kt)("li",{parentName:"ul"},"Add in support for ",(0,o.kt)("inlineCode",{parentName:"li"},"replacer")," to be passed into ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON.stringify()"))),(0,o.kt)("h3",{id:"rds-signer"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/rds-signer"},"rds-signer")),(0,o.kt)("p",null,"New middleware to fetch RDS credential used when connecting with IAM roles. This was built into ",(0,o.kt)("inlineCode",{parentName:"p"},"db-manager"),"."),(0,o.kt)("h3",{id:"s3-key-normalizer"},"s3-key-normalizer"),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"s3-object-response"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/s3-object-response"},"s3-object-response")),(0,o.kt)("p",null,"New middleware to fetch and respond to S3 Object Get request event."),(0,o.kt)("h3",{id:"secrets-manager"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/secrets-manager"},"secrets-manager")),(0,o.kt)("p",null,"Refactored, see documentation"),(0,o.kt)("h3",{id:"sqs-json-body-parser"},"sqs-json-body-parser"),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"sqs-partial-batch-failure"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/sqs-partial-batch-failure"},"sqs-partial-batch-failure")),(0,o.kt)("p",null,"Replaced option ",(0,o.kt)("inlineCode",{parentName:"p"},"sqs")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"AwsClient")," and added in more options for control."),(0,o.kt)("h3",{id:"ssm"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/ssm"},"ssm")),(0,o.kt)("p",null,"Refactored, see documentation"),(0,o.kt)("h3",{id:"sts"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/sts"},"sts")),(0,o.kt)("p",null,"New middleware to fetch assume role credentials."),(0,o.kt)("h3",{id:"validator"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/validator"},"validator")),(0,o.kt)("p",null,"Upgraded ",(0,o.kt)("inlineCode",{parentName:"p"},"ajv")," and it's plugins to support JSON Schema Draft 2020-12 specification. Defaults were change because of this."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plugin ",(0,o.kt)("inlineCode",{parentName:"li"},"ajv-keywords")," removed from being included by default because it's quite a large package and usually only one keyword is used."),(0,o.kt)("li",{parentName:"ul"},"Plugin ",(0,o.kt)("inlineCode",{parentName:"li"},"ajv-errors")," removed from included by default because it conflicts with ",(0,o.kt)("inlineCode",{parentName:"li"},"ajv-i18n")," when dealing with custom messages for multiple languages")),(0,o.kt)("h3",{id:"warmup"},"warmup"),(0,o.kt)("p",null,"Deprecated. This was a work round for a missing feature in AWS Lambda. AWS added in the ability to use ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/aws/new-provisioned-concurrency-for-lambda-functions/"},"provisioned concurrency"),"\non 2019-12-03, removing the need for this work around."),(0,o.kt)("p",null,"However, you can use the following if needed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"middy(lambdaHandler)\n  .before((request) => {\n    if (request.event.source === 'serverless-plugin-warmup') {\n      console.log('Exiting early via warmup Middleware')\n      return 'warmup'\n    }\n  })\n")))}h.isMDXComponent=!0}}]);