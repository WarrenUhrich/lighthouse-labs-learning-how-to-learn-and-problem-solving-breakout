// Build a function that adds two numbers and gives us the sum.

/**
 * PROBLEM SOLVING STEPS; THINK ABOUT:
 * 1. INPUT
 * 2. OUTPUT
 * 3. PROCESSING
 */

/**
 * Sums two numbers
 * 
 * @author Warren Uhrich
 * @param {number} num1 First number to add
 * @param {number} num2 Second number to add
 * @return {number} Sum of the two params
 */
const sumTwoNums = function(num1, num2) {
    let sum = 0;;

    // Break down processing into steps...
    // Given num1 and num2...
    // Add them together, include this value in our sum
    // Return the result numbers
    sum = num1 + num2;

    return sum;
};

console.log('sumTwoNums(1, 2) =', sumTwoNums(1, 2));
// Expecting: 3
