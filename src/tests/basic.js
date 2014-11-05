jest.dontMock('../main');

describe('MerkleTree basic tests', function() {

  it('when called with new, returns a MerkleTree object', function() {
    var MerkleTree = require('../main');
    var mt = new MerkleTree();

    expect(mt instanceof MerkleTree).toBe(true);
  });

});
