var expect = require('chai').expect;
var functions = require('../functions.js');

describe('fixProperNoun', function() {

it('should Exist', function() {
	expect(functions.fixProperNoun).not.to.be.undefined;
});

it('should throw an error if a string is not entered', function() {
	expect(function() {functions.fixProperNoun(36)}).to.throw();
});

it('should return a noun that begins with a capital letter, followed by small letters', function() {
	expect(functions.fixProperNoun('wAteRmEloN')).to.equal('Watermelon');
});

it('should return a noun as it is if already has first letter capitalized and the rest lower case', function() {
	expect(functions.fixProperNoun('Caterpillar')).to.equal('Caterpillar');
})


});









