
**Definition**: A piece of code designed to run one or more tasks/instructions. This piece of code can be executed/called at a later time.

**Related Terms**:
* Parameter:  the name of the "variable" representing the value coming into our function.
* Argument: the actual value being passed into our function during execution.
* Default Parameter: if no argument is passed in for this parameter, we can have a default value.
* `return`:  a value that we can obtain when executing a function.
* If there is no `return`: the value that comes out from the function is `undefined`.
* **Hoisting**: the ability to call our function before it is defined in the file.

**Code Example(s)**:
```js

/**
 * Function Declaration:
 * * Uses the function keyword followed by a name for the function
 * * Supports "Hoisting!"
 */

function sayHello(name='World') { // If we are accepting arguments, we can use a parameter to name these values
	return `Hello, ${name}!`;
}


const myString = sayHello(); // If we want to we can store the return value from our function.

// If we pass a value into a function, it is an argument.
sayHello('Alex');
sayHello('Warren');

/**
 * Function Expression
 * * Must be used AFTER definition
 */

const printText = function(text) {
	console.log(text);
};

/**
 * Arrow Functions
 * * Do not bind() `this` properly!
 * * Must be used AFTER definition
 */

const uppercaseSomeText = (someText) => {
	return someText.toUpperCase();
};

```
