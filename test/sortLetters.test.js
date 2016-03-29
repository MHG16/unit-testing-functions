var expect = require('chai').expect;
var functions = require('../functions.js');

describe('sortLetters', function() {

it('should Exist', function() {
	expect(functions.sortLetters).not.to.be.undefined;
});

it('should throw an error if a string is not entered', function() {
	expect(function() {functions.sortLetters(72)}).to.throw();
});

it('should return a string that contains the letters in alphabetical order', function() {
	expect(functions.sortLetters('hello')).to.equal('ehllo');
});



});
