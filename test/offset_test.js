const assert = require('assert');
const getOffsetStrings = require('../offset').getOffsetStrings;


describe('getOffsetStrings()', function() {
	it('should return [abc, def] for [abc, def]', function() {
		assert.deepEqual(['abc', 'def'], getOffsetStrings(['abc', 'def']));
	});
	it('should return [] for [abc, dxf]', function() {
		assert.deepEqual([], getOffsetStrings(['abc', 'dxf']));
	});
	it('should return all strings for multiple offsets', function() {
		assert.deepEqual(
      ['abc', 'def', 'bcd', 'ace', 'lnp'],
      getOffsetStrings(['ace', 'abc', 'def', 'aoi', 'bcd', 'lnp', 'cub']));
	});
});
