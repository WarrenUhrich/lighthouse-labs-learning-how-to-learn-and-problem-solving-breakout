
**Definition:** A container for events / actions in our code. Helps us perform a task multiple times with ease.

**Related Terms:**
* Parameters: Placeholder / function variable
* Argument: A value we pass
* `return` - output of the function; stops execution of the function; no return keyword results in a return of `undefined`
* Hoisting: function declaration syntax supports hoisting - call functions before they are declared
* Function expression syntax (assigning as a variable) is preferred as it encourages more code organization, and limits where we can define functions
* Default parameters - A value set for the parameter if no argument is received

**Examples / Cheat Sheet:**

```JavaScript
/**
 * Writing functions
 */

myDeclaredFunction(); // Function declaration syntax can be called before defining.
// myFunctionExpression(); // Function expression-based functions CANNOT be called before defining

// Function Declaration Syntax
function myDeclaredFunction(exampleParam1, exampleParam2=3) { // Function can accept parameters

	// If no exampleParam2 is passed, it is assigned 3
	// This is an example of a default parameter

	return; // Returns undefined by default
	        // Return stops execution of the function
}

// Function execution / envocation syntax (when we run our function)
const result1 = myDeclaredFunction(true); // Argument can be passed in
const result2 = myDeclaredFunction(false); // Argument can be passed in

// Function Expression Syntax
const myFunctionExpression = function(exampleParam1, exampleParam2) {
	return;
};

myFunctionExpression(); // We CAN call function expression functions AFTER defining.
```