// Build a function that adds two numbers and gives us the sum.

/**
 * PROBLEM SOLVING STEPS:
 * 1. INPUT
 * 2. OUTPUT
 * 3. PROCESSING (how do we get from 1-2)
 */

/**
 * Sums two numbers
 * 
 * @param {number} num1 First number to add.
 * @param {number} num2 Second number to add.
 * @return {number} The sum of the params.
 */
const sumTwoNums = function(num1=0, num2=0) {
    let sum = 0;

    // Do I need a loop?
    // Should create helper variables?
    // Are there helper functions, or language methods that can help me?

    // // Enforce number for num1
    num1 = Number(num1);

    // // Enforce number for num2
    num2 = Number(num2);

    // // Perform addition to calculate sum
    sum = num1 + num2;

    return sum;
};

console.log(
    'sumTwoNums(1, 2) =', sumTwoNums(1, 2) // Expected: 3
);

console.log(
    'sumTwoNums(5, 2) =', sumTwoNums(5, 2) // Expected: 7
);

console.log(
    'sumTwoNums(35) =', sumTwoNums(35) // Expected: 35
);
