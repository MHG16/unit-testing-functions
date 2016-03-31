var expect = require('chai').expect;
var functions = require('../functions.js');

describe('studentPairs', function() {

it('should Exist', function() {
	expect(functions.studentPairs).not.to.be.undefined;
});

it('should throw an error if an array is not entered', function() {
	expect(function() {functions.studentPairs(25, 'hello')}).to.throw();
});

it('should return an array of arrays that contain random student pairs', function() {
 	expect(functions.sortLetters(['Jen', 'Josh', 'Mory', 'Anna'])).to.equal([[   ], [   ]]);
 });





});