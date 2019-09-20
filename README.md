This package eases migration from the older [softwarerero:meteor-accounts-t9n](https://github.com/softwarerero/meteor-accounts-t9n) 
meteor package package to the newer npm version.

It attaches the T9n variable to the `window` object, and registers the `t9n` template helper.

See the [t9n-export.js]() file for the code, it's pretty simple. It adds English to the T9n map, you can load 
other languages like this:

```js
T9n.map('es', require('meteor-accounts-t9n/build/es'));
``` 

### Installation

```
meteor install appworkshop:t9n-export
```

### Usage

Place `appworkshop:t9n-export` early in your `.meteor/packages` file so it gets loaded before any usages. 
