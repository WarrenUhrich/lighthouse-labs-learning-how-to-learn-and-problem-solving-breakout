
**Definition**: A labelled value we create/manipulate/track in our program.

**Related Terms**:
* `var`: A value that can be re-assigned. *Function-scoped*!
* `const`: A constant value that will not change in our program. Block-scoped!
* `let`: A value that can be re-assigned. Block-scoped!
* **[[Functions]]-scope**: only accessible within the function it is defined in.
* **Block-scope**: only accessible within the set of curly braces it is defined in.

```JavaScript
/**
 * Writing variables
 */

// Can be re-assigned, function-scoped:
var myBool = true;
myBool = false;

// Can be re-assigned, block-scoped:
let myNum = 3.14;
myNum = 123;

// Cannot be re-assigned, block-scoped:
const name = 'Aaron';
```
