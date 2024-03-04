// Build a function that adds an array of numbers and gives us the sum.

/**
 * PROBLEM SOLVING STEPS; THINK ABOUT:
 * 1. INPUT
 *  --> Starting Point! What information will be available, or NEED to be available for us to solve the problem?
 *  --> INPUT can take many forms... a file? user input in the terminal? parameters in a function? information from a database? response from an API?
 *  --> In OUR problem what is our input?
 *  --> We're writing a function... we need PARAMETERS!
 *      1. number
 *      2. number
 *      (both params are numbers!)
 * 2. OUTPUT
 *  --> Ending Point! Our goal! What should the result be?
 *  --> OUTPUT can take many forms... a file? user OUTPUT in the terminal? return in a function? saving something to a database? sending a request to an API/website?
 *  --> In OUR problem above what is our output?
 *  --> We're writing a function... we need a RETURN!
 *      1. number
 * 3. PROCESSING
 *  --> The inbetween... the calculation... the journey!
 *  --> How do we get from STARTING to ENDING?
 *  --> Take the time to plan step-by-step everything you need to do to get the result.
 *  --> Chart your course from point A(INPUT) to point B(OUTPUT).
 */

/**
 * Sum two numbers.
 * 
 * @param {number} num1 - First number to add.
 * @param {number} num2 - Second number to add.
 * @return {number} - The sum of the first and second numbers.
 */
// const sum = function(num1, num2) { // 1. INPUTS
//     let result;

//     // 3. PROCESSING!?
//     result = Number(num1);
//     result = result + Number(num2);

//     return Number(result); // 2. OUTPUT
// };

// console.log('sum(3, 4) = ', sum(3, 4)); // 7
// console.log('sum(5, 10) = ', sum(5, 10)); // 15
// console.log('sum(-10, 3) = ', sum(-10, 3)); // -7

/**
 * Sum array of numbers.
 * 
 * @param {Array<number>} numArr - Array of numbers to add
 * @return {number} - The sum of the first and second numbers.
 */
const sumNumArr = function(numArr) { // 1. INPUTS
    let result = 0; // Start at neutral / zero?

    // 3. PROCESSING!?

    // Loop through our numbers... (C-Style or for...of are great for arrays!)
    for(let index = 0; index < numArr.length; index = index + 1) { // Which for...loop should we use?
        // Inside our loop?

        let currentLoopNum = numArr[index];
        // console.log('currentLoopNum', currentLoopNum);

        // Make sure the value is a number:
        currentLoopNum = Number(currentLoopNum);

        // Add the current number to our sum/result!
        result = result + currentLoopNum;
    }

    return Number(result); // 2. OUTPUT
};

console.log('sumNumArr([3, 4]) = ', sumNumArr([3, 4])); // 7
console.log('sumNumArr([5, 10]) = ', sumNumArr([5, 10])); // 15
console.log('sumNumArr([-10, 3, 5]) = ', sumNumArr([-10, 3, 5])); // -2
