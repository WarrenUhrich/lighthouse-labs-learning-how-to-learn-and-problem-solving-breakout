// Build a function that adds two numbers and gives us the sum.

/**
 * Problem solving plan:
 * 1. Inputs  | parameters(Number, Number)
 * 2. Outputs | return(Number) - this is a sum of the two above
 * 3. Processing / HOW? | Apply "addition" on supplied parameters
 */
                   // Input
const sumTwoNums = (num1, num2) => {
    let sum = 0;

    // PROCESS... how!?
    sum = Number(num1) + Number(num2);

    // Output:
    return sum;
};

// Experiment!
const mySum = sumTwoNums(3, 5); // 8
console.log('sumTwoNums 3, 5 = 8?', mySum);
