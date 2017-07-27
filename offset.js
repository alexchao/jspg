/**
 * Given a list of strings, return the subset of strings that are offsets
 * of each other. Two strings A and B are offsets of each other if the ordinal
 * distances between consecutive characters in string A are the same in
 * string B. For example, 'abc' is an offset of 'jkl', is an offset of 'tuv'.
 * Assume all inputted strings are non-empty and contain characters in the
 * lowercase range [a-z].
 */
const getOffsetStrings = function(strings) {

  const computeOffsetKey = (s) => {
    let offsets = [];
    for (let i = 0; i < s.length - 1; i++) {
      offsets.push(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return offsets.join('.');
  };

	const offsetMap = {};
  strings.forEach((s) => {
    let offsetKey = computeOffsetKey(s);
    if (!offsetMap[offsetKey]) {
      offsetMap[offsetKey] = [s];
    } else {
      offsetMap[offsetKey].push(s);
    }
  });

  return Object.keys(offsetMap).map((offsetKey) => {
    if (offsetMap[offsetKey].length > 1) {
      return offsetMap[offsetKey];
    } else {
      return [];
    }
  }).reduce((a, b) => a.concat(b), []);
};


exports.getOffsetStrings = getOffsetStrings;
