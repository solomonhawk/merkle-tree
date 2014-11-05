jest.dontMock('../main')

describe('MerkleTree functional test', function() {

  var stubbedRetVal = {
    root: "",
    depth: 0,
    levels: 0,
    nodes: []
  };

  it('can process synchronously', function() {
    var MerkleTree = require('../main');
    var mt = new MerkleTree();

    var result = mt.process([1, 2, 3]);

    expect(typeof result).toEqual('object');
  });

  it('can process asynchronously', function(done) {
    var MerkleTree = require('../main');
    var mt = new MerkleTree();

    var result = mt.process([1, 2, 3], cb);

    var cb = function(err, res) {
      expect(err).toBe(null);
      expect(typeof res).toEqual('object');
      expect(res).toEqual(stubbedRetVal);
      done();
    };

  });

  it('after processing, returns an object with specific properties', function() {
    var MerkleTree = require('../main');
    var mt = new MerkleTree();
    var result = mt.process([1, 2, 3]);

    expect(typeof result).toEqual('object');
    expect(result.root).toBeDefined();
    expect(result.depth).toBeDefined();
    expect(result.levels).toBeDefined();
    expect(result.nodes).toBeDefined();
  });

});
