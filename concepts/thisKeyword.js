/***
 * This Keyword
 * It refers to the context in which the code is executed.
 * It depends on how the value/ function is called during execution 
 * 
 */

// implementation with normal function:
console.log("Implementation with normal function")
// In a normal function, this is determined at run time
// example 1: this is a method
console.log("This is a method")
const person = {
  name: 'Alice',
  greet: function() {
    // 'this' refers to the 'person' object
    console.log('Hello, my name is ' + this.name);
  }
};

person.greet(); // Output: Hello, my name is Alice

//Example 2: this in a Standalone Function
console.log("this in a standalone function");
function showMe(){
    console.log(this);
    // this here will refer to global object in strict or node mode and window obj in browser mode
}
showMe();


// Example 3: inside callback func
console.log("This inside a callback function");
const counter = {
  count: 0,
  start: function() {
    console.log('Outer this (counter object):', this);

    // The function passed to setTimeout is called later by the window object
    setTimeout(function() {
      // 'this' no longer refers to 'counter', but the global/window object
      // So this.count is undefined (or an error in strict mode)
      this.count++;
      console.log('Inner this (window/global):', this);
    }, 1000);
  }
};

counter.start();


// arrow functions:
// Arrow functions do not bind their own this; instead, they capture the this value of the enclosing scope when they are defined

// Example1: 1Maintaining this in a Callback
const counter1 = {
  count: 0,
  start: function() {
    console.log('Outer this (counter object):', this);

    // Arrow function is defined within 'start', so it inherits 'this'
    // from the 'start' function's scope, which is the 'counter' object
    setTimeout(() => {
      this.count++; // 'this' correctly refers to the 'counter' object
      console.log('Count incremented:', this.count);
    }, 1000);
  }
};

counter1.start(); // Output (after 1 second): Count incremented: 1

// Arrow function as a method

const person1 = {
  name: 'Bob',
  // 'this' here refers to the global scope (window/global)
  greet: () => {
    console.log('Hello, my name is ' + this.name);
  }
};

// May output "Hello, my name is undefined"
// (unless a global variable 'name' exists)
person1.greet();
