/**
 * Function Declaration
 */

myFunction(); // HOISTING! We can call function declarations BEFORE they're declared.

// Function Declaration
// We must use the function keyword when performing a function declaration
// The function keyword is followed by the name of our function
function myFunction(num) { /* num is an example of a parameter */
	console.log('Hello, World!'); // Any JS code can be placed inside of the function.
	// Each time we execute our function, any code in here will run!

	return true; // We're able to output a value from our function.

	console.log('After return?'); // This line will NEVER run. The function stops at the `return` keyword.
}

myFunction(3); // Values passed-in are called arguments!
myFunction(); // If we call the function by name, followed by parentheses, it executes!

const result = myFunction(); // result will store `true`, as that is the return of our function.

/**
 * Function Expression
 */

// addThree(); // CANNOT call a function expression BEFORE it is defined! Crashes the program.

// Function expressions are stored as values in a variable.
// You'll see an assignment (=)!
const addThree = function(num) {
	console.log('3 + num =', 3 + num);
	return 3 + num;
};

addThree();
addThree(5);
const addThreeResult = addThree(10);
console.log('addThree(10) result:', addThreeResult);
