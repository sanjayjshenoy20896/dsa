/**
 * Closures
 * A closure in JavaScript is the combination of a function and its lexical environment (or scope) within which that function was declared.
 * 
 * This enables the inner function to access and "remember" the variables and parameters of its outer function, even after the outer function has finished executing. 
 * 
 * Working
 * Javascript uses lexical scoping to determine the availablility of the variables in their physical location in the soource code
 * When a function is defined inside another, the inner function maintains a hidden reference to the outer function's scope
 * 
*/

// closures -> variableScoping
function createCounter() {
  let count = 0; // This is a private variable

  // The object's methods form closures
  return {
    increment: function() {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: function() {
      count--;
      console.log(`Count: ${count}`);
    },
    getCount: function() {
      return count;
    }
  };
}

const myCounter = createCounter(); // createCounter() runs once and returns the object

myCounter.increment(); // Output: Count: 1
myCounter.increment(); // Output: Count: 2
console.log(myCounter.getCount()); // Output: 2
myCounter.decrement()

/**
 * Key Concepts of Closures
Lexical Scoping: JavaScript uses lexical scoping, meaning that functions are executed using the variable scope that was in effect when they were defined (not when they are called).
Persistent Memory: The inner function maintains a link to the outer scope, keeping those variables alive in memory as long as the inner function itself is accessible. 
 */

// example using a normal function:
console.log("normal function");
function outerFunction(outerVariable) {
  // 'outerVariable' is in the outer function's scope

  // The inner function closes over 'outerVariable'
  function innerFunction(innerVariable) {
    console.log('Outer variable: ' + outerVariable);
    console.log('Inner variable: ' + innerVariable);
  }

  // We return the inner function, but it still remembers the outer scope
  return innerFunction;
}

const newFunction = outerFunction("hello")
newFunction("world")

// example using closures:
console.log("Arrow functions")
const outerFunctionArrow = (outerVariable) => {
  // 'outerVariable' is in the outer function's scope

  // The arrow function closes over 'outerVariable'
  const innerFunctionArrow = (innerVariable) => {
    console.log('Outer variable: ' + outerVariable);
    console.log('Inner variable: ' + innerVariable);
  };

  // We return the inner arrow function
  return innerFunctionArrow;
};

const newFunction1 = outerFunctionArrow("final");
newFunction1("closures") 