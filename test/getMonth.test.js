var expect = require('chai').expect;
var functions = require('../functions.js');

describe('getMonth', function() {

it('should Exist', function() {
	expect(functions.getMonth).not.to.be.undefined;
});

it('should throw an error if an integer is not entered', function() {
	expect(function() {functions.getMonth('a')}).to.throw();
});

it('should throw an error if an integer between 1 and 12 is not entered', function() {
	expect(function() {functions.getMonth(14)}).to.throw();
});

it('should return the corresponding month', function() {
	expect(functions.getMonth(1)).to.equal('January');
});

});