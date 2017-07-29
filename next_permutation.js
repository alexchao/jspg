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
};

exports.getNextPermutation = getNextPermutation;
