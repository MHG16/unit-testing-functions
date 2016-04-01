var expect = require('chai').expect;
var functions = require('../functions.js');

describe('sumSquares', function() {

it('should Exist', function() {
	expect(functions.sumSquares).not.to.be.undefined;
});

it('should throw an error if integer entered is negative or zero', function() {
	expect(function() {functions.sumSquares('-23', 0)}).to.throw();
});

it('should return the sum of the squares of all integers from 1 up to an including the number', function() {
	expect(functions.sumSquares(4)).to.equal(30);
});

});