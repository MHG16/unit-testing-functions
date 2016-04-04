var expect = require('chai').expect;
var functions = require('../functions.js');

describe('insertDashes', function() {

it('should Exist', function() {
	expect(functions.insertDashes).not.to.be.undefined;
});

it('should throw an error if a string is not entered', function() {
	expect(function() {functions.insertDashes(['hi'], 26)}).to.throw();
});

it('should return the string with dashes inserted between consecutive letters', function() {
	expect(functions.insertDashes('Lets go to the store')).to.equal('L-e-t-s g-o t-o t-h-e s-t-o-r-e');
});