# Variables

**Definition:** a name representing a value in memory.

Related Terms:

* Block-Scoped Declarations:
    * Blocks are any instances of curly braces `{}`
    * `const` - constant / immutable value
    * `let` - changeable / mutable value
* Function-Scoped Declaration:
    * `function` key-word declared functions only
    * `var` - not good practice / 

**Examples / Cheat Sheet:**

```JavaScript
/**
 * Writing variables
 */

// Constant (unchangable)
const myConstantVariable = 3.14;

// Variable that can be changed (mutable)
let  myMutableVariable = 'abc123';
myMutableVariable = 123; // Allowed to change!

// Variable that is mutable and function-scoped
// Function-Scoped: Lives and dies on a per-function basis.
var myVariable = 'testing, 1 2 3!';
```