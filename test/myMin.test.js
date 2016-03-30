var expect = require('chai').expect;
var functions = require('../functions.js');

describe('myMin', function() {

it('should Exist', function() {
	expect(functions.myMin).not.to.be.undefined;
});

it('should throw an error if two integers are not entered', function() {
	expect(function() {functions.myMin('a', 72)}).to.throw();
});

it('should return the smallest of two integers', function() {
	expect(function() {functions.myMin(75, 61)}).to.equal(61);
});

it('should return the smallest of two integers', function() {
	expect(function() {functions.myMin(3, 4)}).to.equal(3);
});

it('should return the smallest of two integers', function() {
	expect(function() {functions.myMin(5, 5)}).to.equal(5);
});


});
