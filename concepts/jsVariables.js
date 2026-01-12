// there are 3 main variables in javascript mainly let,var and const
console.log("name",name)
var name = "sam"
console.log("name",name)
/**
 * In the above example, We have used var to declare a string variable called name and assign the variable called sam.
 * Here we have logged the value of name before and after the declaration.
 * Javascript hoists variables in top of the stack. initailly the variable is not assigned and gets a value as undefined.
 * Once code execution reaches the value assignment. We get the value as sam.
 * 
 * So variables defined with var syntax gets hoisted at the top and can be accessed before actual assignment  of value to the variable.
 */
// console.log(age);
// console.log(status)
let age = 23;
const status = true
console.log(age);
console.log(status)
/**
 * In the above above example, we have decalared two variables namely age and status to a number and boolean respectively. Although these varibles are also hoisted on top of the execution stack. These variables cannot be accessed before the actual declaration. They enter into temporal dead zone where the reference error is found to access variable before initilization.
 * This is a unique distinction between let,const vs var
 */

/***
 * Function declaration vs Function Expression
 * The primary difference between a function declaration and a function expression in JavaScript is hoisting
 * declarations are hoisted and can be called anywhere in their scope, while expressions are not fully hoisted and can only be called after they are defined. 
 * 
 * 
 */

// Function declaration:
//This works because the sum function is hoisted to the top of the scope. 
console.log(sum(2, 3)); // Output: 5

function sum(a, b) {
  return a + b;
}

// Function expressions:
// This results in a ReferenceError (with const or let) or TypeError (with var) because the function is not yet defined when called. 
console.log(multiply(2, 3)); // Error: Cannot access 'multiply' before initialization

const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(2, 3)); // Output: 6 (works after definition)
