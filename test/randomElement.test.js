var expect = require('chai').expect;
var functions = require('../functions.js');

describe('randomElement', function() {

it('should Exist', function() {
	expect(functions.randomElement).not.to.be.undefined;
});

it('should throw an error if an array is not entered', function() {
	expect(function() {functions.randomElement(25, 'hello')}).to.throw();
});

it('should return one of the elements in the array', function() {
	expect(functions.myMin([3, 4, 5])).to.be.any(3, 4, 5);
});



});