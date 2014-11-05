/*
 *  Generates a Merkle Tree representation of a given object. Useful
 *  for verifying data in a distributed system and allows efficient
 *  reconciliation of version conflicts.
 *
 *  The Merkle Tree looks like:
 *
 *                Master Hash
 *             /              \
 *         Hash 0             Hash 1
 *       /       \           /       \
 *  Hash 0-0  Hash 0-1   Hash 1-0  Hash 1-1
 *
 *  Where hash 0 is a hash of the result of concatenating hash 0-0
 *  and hash 0-1. That is, hash 0 = hash( hash 0-0 + hash 0-1 )
 *  where + denotes concatenation.
 *
 *  http://en.wikipedia.org/wiki/Merkle_tree
 *
 */

var crypto = require('crypto');

var foo = { a: 1, b: 2 };

var MerkleTree = function() {
  this.hash      = 'md5';
  this.nodeCount = 0;
  this.depth     = 0;
  this.leaves    = [];
  this.levels    = [];

  var { a, b } = foo;

  this.a = a;
  this.b = b;

  return this;
}

MerkleTree.prototype = {
  use: function(hashFn) {
    this.hash = hashFn;
  },

  process: function(object, callback) {
    if (typeof callback !== 'function') {
      // synchronous mode
      return this.processSync(object);
    } else {
      // asynchronous mode
      var ret = {
        root: "",
        depth: 0,
        levels: 0,
        nodes: []
      };

      // use try / catch to prevent stack overflows
      // suppress throw and invoke callback w/ error?
      // or just throw?

      callback(null, ret);
    }
  },

  processSync: function(object) {
    return {
      root: "",
      depth: 0,
      levels: 0,
      nodes: []
    };
  }
}

module.exports = MerkleTree;
