var expect = require('chai').expect;
var functions = require('../functions.js');

describe('fincMaxDiff', function() {

it('should Exist', function() {
	expect(functions.findMaxDiff).not.to.be.undefined;
});

it('should throw an error if an array is not input', function() {
	expect(function() {functions.findMaxDiff('-23', 'guitar')}).to.throw();
});

it('should return the maximal difference between any two adjacent elements in the array', function() {
	expect(functions.findMaxDiff([9, 11, 16, 4, 7])).to.equal(12);
});

});