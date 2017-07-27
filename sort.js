/**
 * Perform mergesort, overwriting the given array.
 */
const mergeSort = function(nums) {
  mergeSortRange(nums, 0, nums.length - 1);
};

const mergeSortRange = function(nums, lo, hi) {
  if (hi <= lo) {
    return;
  }

  let mid = Math.ceil((lo + hi) / 2);
  mergeSortRange(nums, lo, mid - 1);
  mergeSortRange(nums, mid, hi);
  merge(nums, lo, mid, hi);
};

const merge = function(nums, lo, mid, hi) {
  let loIdx = lo, hiIdx = mid;
  let mergedNums = [];
  while (loIdx < mid && hiIdx <= hi) {
    if (nums[loIdx] < nums[hiIdx]) {
      mergedNums.push(nums[loIdx]);
      loIdx++;
    } else {
      mergedNums.push(nums[hiIdx]);
      hiIdx++;
    }
  }

  while (loIdx < mid) {
    mergedNums.push(nums[loIdx]);
    loIdx++;
  }
  while (hiIdx <= hi) {
    mergedNums.push(nums[hiIdx]);
    hiIdx++;
  }

  /*
  mergedNums = mergedNums.concat(nums.slice(loIdx, mid));
  mergedNums = mergedNums.concat(nums.slice(hiIdx, hi + 1));
  */

  for (let i = 0; i < mergedNums.length; i++) {
    nums[lo + i] = mergedNums[i];
  }
};


exports.mergeSort = mergeSort;
