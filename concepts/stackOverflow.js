
/***
 * Stack Overflow:
 * 
 * What is call stack?
 * It is datastructure is javascript that keeps track of function calls during program execution.
 * It operates on LIFO (Last In First Out) principle.
 * 
 * How the call stack works during execution:
 * 
 * When a function is called, javascript engine creates a new stack frame and pushes the frame on the call stack.
 * This stack frame holds all the local data for that specific function call, including its arguments, local variables, and the return address
 * 
 * 
 * Stack overflow problem:
 * The issue arises because the call stack has a limited, finite amount of memory.
 * If an array is extremely deeply nested, the function keeps calling itself, pushing more and more stack frames onto the call stack until the memory limit is reached
 * At this point, the stack "overflows," and the program crashes. 
 */

// explain stack overflow via recursive function js array flattening
function flatten(arr) {
  let result = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      // Recursive call creates a new stack frame
      result.push(...flatten(element)); 
    } else {
      result.push(element);
    }
  }
  return result;
}

// Example usage:
const deepArray = [1, [2], [3, [[4, 5], 6], 7], 8];
console.log(flatten(deepArray)); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

const flattenedArray = deepArray.flat(Infinity)
console.log(flattenedArray)
