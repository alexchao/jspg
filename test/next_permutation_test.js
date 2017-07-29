const assert = require('assert');
const getNextPermutation = require('../next_permutation').getNextPermutation;


describe('getNextPermutation()', function() {
  it('should return null for a single element', function() {
    assert.equal(getNextPermutation([5]), null);
  });
  it('should return null for the largest possible permutation', function() {
    assert.equal(getNextPermutation([5, 3, 2]), null);
  });
  it('should return [5, 2] for [2, 5]', function() {
    assert.deepEqual(getNextPermutation([2, 5]), [5, 2]);
  });
  it('should return [1, 3, 5, 2] for [1, 3, 2, 5]', function() {
    assert.deepEqual(getNextPermutation([1, 3, 2, 5]), [1, 3, 5, 2]);
  });
  it('should return [1,6,2,4,7] for [1,4,7,6,2]', function() {
    assert.deepEqual(getNextPermutation([1,4,7,6,2]), [1,6,2,4,7]);
  });
  it('should return [6,9,2,1,4,7] for [6,9,1,7,4,2]', function() {
    assert.deepEqual(getNextPermutation([6,9,1,7,4,2]), [6,9,2,1,4,7]);
  });
  it('should return [6,7,2,4,4] for [6,4,7,4,2]', function() {
    assert.deepEqual(getNextPermutation([6,4,7,4,2]), [6,7,2,4,4]);
  });
});
