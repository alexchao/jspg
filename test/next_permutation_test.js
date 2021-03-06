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
    assert.deepEqual([5, 2], getNextPermutation([2, 5]));
  });
  it('should return [1, 3, 5, 2] for [1, 3, 2, 5]', function() {
    assert.deepEqual([1, 3, 5, 2], getNextPermutation([1, 3, 2, 5]));
  });
  it('should return [1,6,2,4,7] for [1,4,7,6,2]', function() {
    assert.deepEqual([1,6,2,4,7], getNextPermutation([1,4,7,6,2]));
  });
  it('should return [6,9,2,1,4,7] for [6,9,1,7,4,2]', function() {
    assert.deepEqual([6,9,2,1,4,7], getNextPermutation([6,9,1,7,4,2]));
  });
  it('should return [6,7,2,4,4] for [6,4,7,4,2]', function() {
    assert.deepEqual([6,7,2,4,4], getNextPermutation([6,4,7,4,2]));
  });
  it('should return [4,2,3,5,5] for [3,5,5,4,2]', function() {
    assert.deepEqual([4,2,3,5,5], getNextPermutation([3,5,5,4,2]));
  });
});
