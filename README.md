merkle-tree (**WIP**) [![Build Status](https://travis-ci.org/solomonhawk/merkle-tree.svg?branch=master)](https://travis-ci.org/solomonhawk/merkle-tree)
===========

**Caution:** Incomplete, not yet published, and probably awful.


A JavaScript implementation of Merkle Trees

Disclaimer: WIP

![Disclaimer](http://i2.kym-cdn.com/photos/images/original/000/638/208/3d1.gif)

If you're looking for something to use I would recommend that you [search NPM](https://www.npmjs.org/search?q=merkle).

```javascript
// Include the library
var Tree = require('merkle-tree')

// Optionally set the hash function when you require
// var Tree = require('merkle-tree').use('md5')


// You can pass in Arrays (with mixed data types)
var data = [ 0, {}, [], 1, function(){} ];
// Or nested objects
// var data = { foo: "bar", baz: { lol: "xD" }, qux: 7, zip: 1, erm: 0 };

// Synchronous
var result = Tree.use('md5').process(data);

// Asynchronous
Tree.use('md5').process(data, function(err, result){
	// do something with result
});

{
	"root": "13f7bfa35ccdd9f57db6829f674e33894b208f16",
	"depth": 4,
	"levels": 5,
	"nodes": 10
}
```


API
===

## .use(hashFn)

Params:
 * 	**hashFn** [*String*]
  	One of the following values: **"md5", "sha1"**

Set the hashing function to use for processing.

## .process(data [, callback])

Params:
 * 	**data** [*Object or Array*]
 * 	**callback** [*Function*]
 	Optional. If provided, processing will be asynchronous. The callback will be
 	called node-style with the error first parameter and the result of processing
 	as the second parameter: `callback(err, result)`

Processes an object or array and returns a Merkle Tree object or if invoked with
a callback, will invoke the callback with either an error or the result of the
computation.

Contributing
============

## Setup

Running the following command will get you up and running quickly. From the root
of the project:

	$ script/setup

## Build

Command | Description
------- | -----------
`$ npm test` | Runs unit tests with [Jest](http://github.com/facebook/jest).
`$ npm run build` | Builds `lib/main.js` with `webpack -p`
`$ npm run build:dev` | Runs `webpack -d --watch`, for development
