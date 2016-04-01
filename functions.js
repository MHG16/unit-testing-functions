/*
 * PROBLEM `checkData`: (normal)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Inputs: inputString - a string. Example valid value: 'sos', returns: true.   
 *
 * Return value of the function: type - Boolean.  
 *
 * How to implement function:  Use string.length to determine the length of the string.  Use an if statement 
 * to check if equals 3 or not and return true or false.   
 *
 */


function checkData(inputString) {
	if(typeof(inputString) !== 'string') {
		throw new Error('Invaid Input');
	} else if 
		(inputString.length === 3) 
		return true;
	
	return false;
};


/*
 * PROBLEM `concatenateArrays`: (normal)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Inputs: a,b two arrays of integers. Example valid values: [1, 2, 3], [4, 5, 6] returns [1, 2, 3, 4, 5, 6]
 *
 * Return value of the function: type - array  
 *
 * How to implement function: Use array.concat() to concatenate the two arrays.   
 */

function concatenateArrays(a, b) {
	var newArray;

	if((Array.isArray(a)  === false) || (Array.isArray(b) === false)) {
		throw new Error('Invalid Input');
	}  
	 newArray = a.concat(b);
	 return newArray;  
};

/*
 * PROBLEM `fixProperNoun`: (normal)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Inputs: noun, a string.  Example valid value: 'aPpLe' returns 'Apple'
 *
 * Return value of the function: type - string with first letter capitalized, rest lower case
 *
 * How to implement function: 1. Convert first letter to uppercase: string.charAt(0).toUpperCase
 * 2. convert rest of string to lower case:  string.substring(1, string.length)  string.toLowerCase
 * 3. concatenate the first letter with the rest of the string: concat(stringStart, stringRest)
 */
function fixProperNoun(noun) {
	if(typeof(noun) !== 'string') {
		throw new Error('Invalid Input');
	}

	var firstLetter = '';
	var restOfString = '';

	firstLetter = noun.charAt(0).toUpperCase();
	restOfString = noun.substring(1, noun.length).toLowerCase();  

	return firstLetter + restOfString;

};
/*
 * PROBLEM `sortLetters`: (normal)
 * Write a function called `sortLetters` that returns a string that sorts all
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Inputs: inputString- a string.  Example valid value 'coconut' returns 'ccnootu'
 *
 * Return value of the function: type - string with letters in alphabetical order 
 *
 * How to implement the function: 1. use string.split() to make string into an array of strings
 * 2. Use array.sort() function to sort the array
 * 3. use array.join() to turn array back into a string
 * 4. return the string.  
 *
 *
 *
 * 5. Return the new string with letters in alphabetical order  
 *
 */
function sortLetters(inputString) {
	if(typeof(inputString) !== 'string') {
		throw new Error('Invalid Input');
	}
     var stringArray = [];
	 stringArray = inputString.split('');

     stringArray = stringArray.sort();


     return stringArray.join(''); 
}


/*
 * PROBLEM `absVal`: (normal)
 * Write a function called `absVal` that return the absolute value of a given
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Inputs: an integer. Example valid value: -7 returns 7.  
 *
 * Return value of the function: type - integer, the absolute value of the input.   
 *
 * How to implement the function: 1. check that the number is an integer by checking if the number
 * divided by 1 has remainder zero. 
 * 2. if the number is postive, return that number 
 * 3. if the number is negative, return the positive of that number.  
 */
function absVal(integer) {
	if(typeof(integer) !== 'number') {
		throw new Error('Invalid Input');
	}

	else if 
		((integer % 1) !== 0) {
			throw new Error('Invalid Input');
		}	
	else if 
		(integer >= 0) {
			return integer; 
		}
	
	return integer * -1;  

}



/*
 * PROBLEM `myMin`: (normal)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Inputs: two integers.  Ex valid input: 4, 17.  Returns 4.  
 *
 * Return value of the function: an integer, the smaller of the two inputs.  
 *
 * How to implement the function: 1. check that both of the numbers are integers by dividing each 
 * by one giving a remainder of zero.
 * 2. Compare each number using < and returning the smaller of the two.
 *
 */
 function myMin (a, b) {
 	if((typeof(a) !== 'number') || (typeof(b) !== 'number')) {
		throw new Error('Invalid Input');
	}

	else if 
		((a % 1 !== 0) || (b % 1 !== 0)) {
			throw new Error('Invalid Input');
		}
 	
	else if 
		(a >= b) {
			return b;
		}
	  	return a;
}




/*
 * PROBLEM `myMax`: (normal) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers ans returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 *
 * Inputs: an array of integers.  Ex valid input [5, 17, 3, 25, 47, 15].  Returns 47.  
 *
 * Return value of the function: the largest integer in the array.  
 *	
 * How to implement the function: 1. Create a variable to hold the largest integer and set it equal 
 * the first item in the array.
 * 2. Iterate over the array with a for loop and if the number at the index is larger than the 
 * largest so far, set the largest so far to that number.  
 * 3. Return the largest integer once the end of the array is reached.  
 */

 function myMax(array) {
	if(Array.isArray(array) !== 'true') {
		throw new Error('Invalid Input');
	}

	//check value in each index is an integer
	for (var i = 0; i < array.length; i++) 
		if (typeof(array[i]) !== 'number') {
			throw new Error('Invalid Input')
		}
	//sort the array and return 	
	array.sort(function(a, b) {
  		return a - b;
	});
	return array[array.length-1];
}	

/*
 * PROBLEM `getMonth`: (normal)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Inputs: an integer 1 - 12. Example valid input: 5.  Returns 'May'
 * 
 * Return value of the function: a string - 'January' through 'December'
 *
 * How to implement the function: 1. Create a variable 'month' to store the input integer 
 * 2. Use an array: monthsOfYear = [January, February, March, April, May, June, July, August, September, October, November, December]
 * 3. Return the value in the array at position - 1;  
 *
 */

 function getMonth(month) {
 	if(typeof(month) !== 'number') {
		throw new Error('Invalid Input');
	}

	if((month < 1) || (month > 12)) {
		throw new Error('Invalid Input');
	}

 	var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 	return monthsOfYear[month - 1];

 }



/*
 * PROBLEM `randomElement`: (normal)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 *
 * Inputs: an array of values.  Example valid input: ['blue', 'green', 'red', 'yellow'].  Returns green.
 * 
 * Return value of the function: one random element of the array, same type as in original array.   
 *
 * How to implement the function: 1. Create a variable to hold the random element.
 * 2. Return a random element of the input array using Math.floor and Math.random on the length of the array
 */

 function randomElement(array) {
 	if(Array.isArray(array) !== 'true') {
		throw new Error('Invalid Input');
	}

 	var randomThing
 
 	return randomThing = array[Math.floor(Math.random() * array.length)];
 }


/*
 * PROBLEM `studentPairs`: (normal)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 *
 * Inputs: an array of student names which are strings.  Example valid input: ['Nate', 'Dan', 'Katy', 'Dana'].
 * Return value of the function: an array of arrays of string pairs [['Dana', 'Nate'], ['Dan', 'Katy']]
 *
 * How to implement function: 1. loop through the student array and pull out 2 random names at a time
 * 2. Push those two names into an array.  
 * 3 Continue pulling out 2 random names until none left in input array and push those two into array. 
 * 4.  Concatenate all of 2 student arrays into longer array.  
 */

 function studentPairs(array) {
 	if(Array.isArray(array) !== 'true') {
		throw new Error('Invalid Input');
	}
	//check that each value in the array is a string
	for (var i = 0; i < array.length; i++) 
		if (typeof(array[i]) !== 'string') {
			throw new Error('Invalid Input')
		}
	
	var arrayOfTwoStudentArrays = [];
	var name1 = '';
	var name2 = '';
	var randomNumber

	while (array.length) {
	
		randomNumber = array[Math.floor(Math.random() * array.length)];
		name1 = array[randomNumber];
		array.splice(randomNumber, 1);
		randomNumber = array[Math.floor(Math.random() * array.length)];
		name2 = array[randomNumber];
		array.splice(randomNumber, 1);
		var twoStudentArray = [name1, name2];
		arrayOfTwoStudentArrays.push(twoStudentArray);
	}

 }


/*
 * PROBLEM `sumSquares`: (normal)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM `findMaxDiff`: (normal)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `insertDashes`: (normal)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `mySubstring`: (normal)
 * Implement a function called `mySubstring` that can output the substring of
 * the given string within specified bounds.
 *
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 *
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `splitSwap`: (hard)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 *
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `smallMultiples`: (hard)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `isDiagonalMatrix`: (nightmare)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal
 * matrix if all entries outside the main diagonal are zero (the diagonal from
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `isAnagram`: (nightmare) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal
 * lengths arr1 and arr2. The function should return a new array of the same
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `validateParentheses`: (nightmare) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `flattenArray`: (nightmare) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */

/*
 * Do not modify the code below
 */
module.exports = {
	checkData: 				typeof checkData === 'undefined' ? undefined : checkData,
	concatenateArrays: 		typeof concatenateArrays === 'undefined' ? undefined : concatenateArrays,
	fixProperNoun: 			typeof fixProperNoun === 'undefined' ? undefined : fixProperNoun,
	sortLetters: 			typeof sortLetters === 'undefined' ? undefined : sortLetters,
	absVal: 				typeof absVal === 'undefined' ? undefined : absVal,
	myMin: 					typeof myMin === 'undefined' ? undefined : myMin,
	myMax: 					typeof myMax === 'undefined' ? undefined : myMax,
	getMonth: 				typeof getMonth === 'undefined' ? undefined : getMonth,
	randomElement: 			typeof randomElement === 'undefined' ? undefined : randomElement,
	studentPairs: 			typeof studentPairs === 'undefined' ? undefined : studentPairs,
	sumSquares: 			typeof sumSquares === 'undefined' ? undefined : sumSquares,
	findMaxDiff: 			typeof findMaxDiff === 'undefined' ? undefined : findMaxDiff,
	insertDashes: 			typeof insertDashes === 'undefined' ? undefined : insertDashes,
	mySubstring: 			typeof mySubstring === 'undefined' ? undefined : mySubstring,
	splitSwap: 				typeof splitSwap === 'undefined' ? undefined : splitSwap,
	smallMultiples: 		typeof smallMultiples === 'undefined' ? undefined : smallMultiples,
	rot13: 					typeof rot13 === 'undefined' ? undefined : rot13,
	derot13: 				typeof derot13 === 'undefined' ? undefined : derot13,
	rotn: 					typeof rotn === 'undefined' ? undefined : rotn,
	findBoth: 				typeof findBoth === 'undefined' ? undefined : findBoth,
	countBoth: 				typeof countBoth === 'undefined' ? undefined : countBoth,
	isDiagonalMatrix: 		typeof isDiagonalMatrix === 'undefined' ? undefined : isDiagonalMatrix,
	isAnagram: 				typeof isAnagram === 'undefined' ? undefined : isAnagram,
	validateParentheses:	typeof validateParentheses === 'undefined' ? undefined : validateParentheses,
	flattenArray: 			typeof flattenArray === 'undefined' ? undefined : flattenArray
};