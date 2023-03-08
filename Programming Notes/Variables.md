
**Definition:** A space in memory to store data.

**Related Terms:**
* Block Scoped (Scoped Inside Curly Braces - Lives and Dies Inside Any Curly Braces):
	* `const` - Cannot re-assign the value
	* `let` - We can re-assign the value
* [[Functions]] Scoped (Curly Braces but only PER FUNCTION):
	* `var` - We can re-assign the value; function-scoped; recommended we avoid using this to keep our code more predictable and organized

**Examples / Cheat Sheet:**

```JavaScript
/**
 * Writing Variables
 */

// Constant (immutable / not able to re-assign)
const name = 'Alice';

// Let (mutable / able to re-assign)
let myNum = 3.14;
myNum = 4.5; // Able to re-assign.

// Var
var myBool = true;
myBool = false; // Able to re-assign.
```



