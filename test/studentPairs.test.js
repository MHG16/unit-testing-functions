var expect = require('chai').expect;
var functions = require('../functions.js');

describe('studentPairs', function() {

it('should Exist', function() {
	expect(functions.studentPairs).not.to.be.undefined;
});

it('should throw an error if an array is not entered', function() {
	expect(function() {functions.studentPairs(25, 'hello')}).to.throw();
});

it('should throw an error if an odd number of students is in the array', function() {
	expect(function() {functions.studentPairs(['Joe', 'Martin', 'Maria'])}).to.throw();
});



});