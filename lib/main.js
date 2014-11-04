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

function MerkleTree(object) {
  return {};
}

module.exports = MerkleTree;
