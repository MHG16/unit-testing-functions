var expect = require('chai').expect;
var functions = require('../functions.js');

describe('absVal', function() {

it('should Exist', function() {
	expect(functions.absVal).not.to.be.undefined;
});

it('should throw an error if an integer is not entered', function() {
	expect(function() {functions.absVal('hello')}).to.throw();
});

it('should return an integer that is the absolute value', function() {
	expect(functions.absVal(-514)).to.equal(514);
});

it('should return an integer that is the absolute value', function() {
	expect(functions.absVal(0)).to.equal(0);
});

});













