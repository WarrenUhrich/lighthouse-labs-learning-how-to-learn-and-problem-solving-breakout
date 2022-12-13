# Functions

**Definition:** A piece of code we can re-use.

**Related Terms:**
* Parameters: placeholders / variables that represent values passed into a function; we write this in a function's declaration.
* Arguments: values passed into a function at time of execution / when it is envoked.
* `return` - Terminates the function execution; gives a value when the function is executed.
* Side Effect: mutation of variables from outside of a function; running methods / functions from outside of our function; I/O (user input or output, DB calls, API calls, etc.)
* Hoisting: function declarations are brought up to the top of JavaScript code; this means we can envoke in lines before the function is formally declared.

**Examples / Cheat Sheet:**


Format for writing and using functions...

```JavaScript

/**
 * Writing functions
 */

// Arrow function expression
// Parenthesis include our parameter(s)
// `this` is not bound in arrow functions (consider function declaration instead)
const myArrowFunction = (exampleParam1, exampleParam2) => {
    // Your repeatable logic here; code block
    return; // Returns undefined by default, or if no return present.
};

// Must be called after defining.
myArrowFunction('test1', 'test2'); // Two (2) arguments passed in.

// Can be called before declaration.
myDeclaredFunction(1, 2); // Two (2) arguments passed in.

// Function declaration
// Via hoisting, can be envoked before declaration
function myDeclaredFunction(exampleParam1, exampleParam2) {
    // Your repeatable logic here; code block
    return; // Returns undefined by default, or if no return present.
}

// Function expression
// Best practice because it encourages us to define-first—use later!
const myFunctionExpression = function(exampleParam1, exampleParam2) {
    // Your repeatable logic here; code block
    return; // Returns undefined by default, or if no return present.
};

// Must be called after defining.
myFunctionExpression('test123', 12345); // Two (2) arguments passed in.
```

Example of a real function...

```JavaScript
/**
 * Sum two numbers
 * 
 * @param {number} first number to add
 * @param {number} second number to add
 * @return {number} sum of params
 */
const sumTwoNums = (num1, num2) => {
    let sum = 0;

    // PROCESS... how!?
    sum = Number(num1) + Number(num2);

    // Output:
    return sum;
};

// Experiment!
const mySum = sumTwoNums(3, 5); // 8
console.log(mySum); // Check if this is eight!
```
