/**
 * Given an array of numbers representing the digits of a whole number (e.g.
 * [1, 3, 2] for 132), return the next largest permutation of those digits
 * in the same format.
 *
 * Examples:
 * [1, 3, 2] => [2, 1, 3]
 * [6, 4, 7, 5, 2] => [6, 5, 2, 4, 7]
 * [5, 2] => null
 * [6, 4, 7, 4, 2] => [6, 7, 2, 4, 4]
 */
const getNextPermutation = (nums) => {
  if (nums.length < 2) {
    return null;
  }

  // Find the index where, from right to left, the numbers stop increasing.
  // (A constantly increasing segment of numbers represents the largest
  // possible permutation for that segment.)
  let pivotIdx = -1;
  let i = nums.length - 2;
  while (i >= 0 && pivotIdx === -1) {
    if (nums[i] < nums[i + 1]) {
      pivotIdx = i;
    } else {
      i--;
    }
  }

  // The pivot is the number that breaks the increasing sequence. If no
  // such number is found, then the whole number is already the largest
  // permutation.
  if (pivotIdx === -1) {
    return null;
  }

  // Swap the pivot with the next largest number in the segment to the right
  // of the pivot, then sort that range of numbers in increasing order.
  let pivot = nums[pivotIdx];
  let newSegment = nums.slice(pivotIdx + 1);
  let nextLargestDigit = Math.min.apply(
    null,
    newSegment.filter((n) => n > pivot)
  );
  newSegment[newSegment.indexOf(nextLargestDigit)] = pivot;
  newSegment.sort();

  let result = [];
  result = result.concat(nums.slice(0, pivotIdx));
  result.push(nextLargestDigit);
  result = result.concat(newSegment);
  return result;
};


exports.getNextPermutation = getNextPermutation;
