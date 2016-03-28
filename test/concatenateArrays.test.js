var expect = require('chai').expect;
var functions = require('../functions.js');

describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(functions.concatenateArrays).not.to.be.undefined;
	});

	it('should throw an error if two arrays are not entered', function () {
		expect(function() {functions.concatenateArrays([1,2], 'hello')}).to.throw();
	});

	it('should return an array that has the elements of array a followed by the elements of array b', function() {
		expect(functions.concatenateArrays([1, 3], [7, 9])).to.equal([1, 3, 7, 9]);
	});



});








