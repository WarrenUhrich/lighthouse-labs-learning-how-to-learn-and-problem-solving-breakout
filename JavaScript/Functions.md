# Functions

**Definition**: reusable code, a block of code that performs an action; container for code

**Related Terms**:

* **non-primitive**: objects or functions - complex data that is not stored or accessed by-value, but instead by-reference
* **parameters**: inputs for our functions; placeholders for arguments
* **arguments**: the value we pass into a function during execution
* `return`: output from our function (when we run our function, this value is given back)
* **anonymous function**: a function with no name
* **hoisting**: pushes certain code to the top, scans for DECLARATION functions before running our code
* **callback**: a function passed to another as an argument / parameter

```JavaScript
/**
 * Writing functions
 */

// Declaration-based functions are hoisted; we can call them before they are defined in our code.
myFunction(3, 'hello'); // Values passed in are arguments

// Declaration
function myFunction(param1, param2) { // Placeholder names are parameters
	// Logic goes here!
	return; // Returns undefined by default
}

// Expression
const myOtherFunction = function() { // An otherwise anonymous function is stored in a variable
	// Logic goes here!
	return; // Returns undefined by default
};

// Arrow function
const myArrowFunction = () => { // An otherwise anonymous function is stored in a variable
	// Logic goes here!
	return; // Returns undefined by default
};

const myHigherOrderFunction = function(otherFunction) {
	// other logic here...
	otherFunction();
	// other logic here...
};

myHigherOrderFunction(function() { console.log('Hi!'); });

```
