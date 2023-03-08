myDeclaredFunction();
console.log('myDeclaredFunction ran a-OK');
myFunctionExpression();
console.log('myFunctionExpression ran a-OK');

// Function Declaration Syntax
function myDeclaredFunction(exampleParam1, exampleParam2) { // Function can accept parameters

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