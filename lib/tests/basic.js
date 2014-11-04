// Simple Tests
jest.dontMock('../main');

describe('Merkle Tree', function() {

  it('when called with no arguments, it returns an empty object', function() {
    var MerkleTree = require('../main');
    var mt = new MerkleTree();

    expect(typeof mt).toEqual('object');
  });

});

/*

var Tree = require('merkle-tree')




*/
