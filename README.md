# Palmetto Flow Service Container

An opionatied palmetto flow service container that can load services with a common pattern:

## example

``` js
var fetchConfig = require('zero-config')
var config = fetchConfig(__dirname, { dcValue: 'us-east-1'})
var sc = require('palmettoflow-service-container')
sc(config, [
  'service1',
  'service2',
  'service3'
])
```

The pfsc will initialize the list of services with the following higher order function:

``` js
module.exports = function (config) {
  return function (ee) {
    // ... do stuff
  }
}
```

Using the service container you need the configuration for your services, the adapter and to npm install the services.

If you use `zero-config` then put the name of your adapter and all of your service's configuration information by the name of the service.

``` json
{
  "adapter": "@twilson63/palmetto-couchdb",
  "palmetto": {
    "endpoint": "",
    "app": ""
  },
  "service1": {
    "config1": "foo",
    "config2": "bar"
  },
  "service2": {
    "config1": "foo"
  }
}
```

Then npm install the adapter and the service.

``` sh
npm install zero-config palmettoflow-service-container service1 service2 @twilson63/palmetto-couchdb
```

Finally, create a file `index.js` and setup the configuration and services:

``` js
var fetchConfig = require('zero-config')
var config = fetchConfig(__dirname, { dcValue: 'us-east-1'})
var sc = require('palmettoflow-service-container')
sc(config, [
  'service1',
  'service2',
  'service3'
])
```

