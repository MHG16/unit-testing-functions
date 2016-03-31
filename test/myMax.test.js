var expect = require('chai').expect;
var functions = require('../functions.js');

describe('myMax', function() {

it('should Exist', function() {
	expect(functions.myMax).not.to.be.undefined;
});

it('should throw an error if an array of integers is not entered', function() {
	expect(function() {functions.myMax('a', 72, ['a', 'b'])}).to.throw();
});

it('should return the largest integer in the array', function() {
	expect(functions.myMax([17, 2, 4, 56, 24])).to.equal(56);
});

it('should return the largest integer in the array', function() {
	expect(functions.myMax([-17, 0, 4, 96, 4, 24, 96])).to.equal(96);
});



});