var expect = require('chai').expect;
var functions = require('../functions.js');

describe('checkData', function() {
	it('should exist', function() {
		expect(functions.checkData).not.to.be.undefined;
	});

	it('should return true if string has length of 3', function() {
		expect(checkData('abc')).to.equal('true');
	});

	it('should return false if string is longer 3', function() {
		expect(checkData('happy birthday!')).to.equal('false');
	});

	it('should return false if string is shorter than 3', function() {
		expect(checkData('ab')).to.equal('false');
	});



});