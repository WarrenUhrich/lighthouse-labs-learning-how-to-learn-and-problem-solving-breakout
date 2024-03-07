
const myGlobalVar = 4;

{
    var myVarNum = 3; // Function-scoped!
    let myLetNum = 5; // Block-scoped!
}

console.log('myVarNum', myVarNum); // 3
// console.log('myLetNum', myLetNum); // X not defined!
