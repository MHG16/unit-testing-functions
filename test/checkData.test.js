var expect = require('chai').expect;
var functions = require('../functions.js');

describe('checkData', function() {
	it('should exist', function() {
		expect(functions.checkData).not.to.be.undefined;
	});

	it('should throw an error if a string is not entered', function() {
		expect(function() {functions.checkData(15) }).to.throw();
	}) 

	it('should return true if string has length of 3', function() {
		expect(functions.checkData('abc')).to.equal(true);
	});

	it('should return false if string is longer 3', function() {
		expect(functions.checkData('happy birthday!')).to.equal(false);
	});

	it('should return false if string is shorter than 3', function() {
		expect(functions.checkData('ab')).to.equal(false);
	});

});