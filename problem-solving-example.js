// Build a function that adds an array of numbers and gives us the sum.

/**
 * 1. INPUT
 *  -> Starting Point!
 *  -> What info do we have to approach the problem with...
 *  -> INPUT can take many forms... a file? user input in the terminal? parameters in a function? info from a database? response from a web server or API?
 *  For our case, INPUT will a PARAMETER!
 *  Identify the data-type: Array<number> (array of numbers)
 * 
 * 2. OUTPUT
 *  -> Ending Point! Our Destination! 
 *  -> OUTPUT too can take many forms... -> INPUT can take many forms... a file? user output in the terminal? return in a function? saving/changing in a database? request to a web server or API?
 * For our case OUTPUT will be a RETURN!
 * Identify the data-type: number
 * 
 * 3. PROCESSING
 *  -> The journey!
 *  -> How do we get from INPUT that we start with, to OUTPUT—our goal!?
 * Break down the problem into the TINIEST pieces you can think of!
 * Easier to solve many tiny problems than a giant monster/mountain.
 */

/**
 * Sum numbers in an array.
 * 
 * @param {Array<number>} listOfNums - Array of numbers to sum.
 * @return {number} - Sum of the numbers from the array.
 */
const sumNumsInArray = (listOfNums) => { // 1. INPUT
    let sum = 0;

    // 3. PROCESSING
    // listOfNums.forEach((num) => {
    //     sum += num;
    // });

    // Loop through array!
    for(const num of listOfNums) {
        if(typeof num !== 'number') throw Error('TYPE ERROR: Only supply numbers.');

        // Inside loop, add each number to sum!
        sum += num;
    }

    return sum; // 2. OUTPUT
};

// Write some experiments...
console.log('sumNumsInArray([1, 2, 3]) =', sumNumsInArray([1, 2, 3])); // 6
console.log('sumNumsInArray([5, 10]) =', sumNumsInArray([5, 10])); // 15
