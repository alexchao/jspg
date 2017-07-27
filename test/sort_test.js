const assert = require('assert');
const sort = require('../sort');


describe('sort.mergeSort()', function() {
  it('should do nothing to an empty array', function() {
    let nums = [];
    sort.mergeSort(nums);
    assert.deepEqual([], nums);
  });
  it('should do nothing to an array of one value', function() {
    let nums = [5];
    sort.mergeSort(nums);
    assert.deepEqual([5], nums);
  });
  it('should sort an array with 2 values', function() {
    let nums = [5, 1];
    sort.mergeSort(nums);
    assert.deepEqual([1, 5], nums);
  });
  it('should sort an array with 3 values', function() {
    let nums = [3, 5, 1];
    sort.mergeSort(nums);
    assert.deepEqual([1, 3, 5], nums);
  });
  it('should sort an array', function() {
    let nums = [239, 238, 3, 5, 1, -1, 90, 0, 24];
    sort.mergeSort(nums);
    assert.deepEqual([-1, 0, 1, 3, 5, 24, 90, 238, 239], nums);
  });
});
