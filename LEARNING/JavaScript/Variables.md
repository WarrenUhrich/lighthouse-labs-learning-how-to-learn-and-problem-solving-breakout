
**Definition**: A way in JavaScript to name and store information in memory.

**Related Terms**:
* `var`: a variable that can be re-assigned; this variable is function-scoped (majority of teams do not favour `var`)
* `const`: a variable that cannot be re-assigned; this variable is block-scoped.
* `let`: a variable that can be re-assigned; this function is block-scoped.
* Function-scoped: this variable will exist only in the function it starts in.
* Block-scoped: this variable will exist only in the block (curly braces `{}`) it starts in.

**Code Examples**:
```js

/**
 * Writing variables
 */

{
	var myBool = true;

	let myNum = 3.14;
	myNum = 4; // Can be re-assigned! Only accessible in the block it was defined in.

	const name = 'Alex';
	// name = 'test'; // CANNOT be re-assigned! Only accessible in the block it was defined in.
}

myBool = false; // Can be re-assigned! Function-scoped, so still accessible!



```
