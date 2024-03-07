// console.log(
//     sayHello('🐟') // "Hoisting" - 
// );

// printText('testing expression!');

/**
 * Function Declaration:
 * * Uses the function keyword followed by a name for the function
 * * Fallen out of favour (like var!)

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
 */

const printText = function(text) {
	console.log(text);
};

/**
 * Arrow Functions
 * * Do not bind() `this` properly!
 */

const uppercaseSomeText = (someText) => {
	return someText.toUpperCase();
};