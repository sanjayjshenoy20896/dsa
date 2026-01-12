/**
 * Object prototype and prototypal inheritance
 * prototypes are the mechanism by which objects inherit features from one another,
 * prototypal inheritance describes this dynamic inheritance model, where objects inherit directly from other objects rather than from classes. 
 * Key features for prototype:
 * 1.) Dyanamic: The properties can be modified at run time and changes reflect immediately to inheritaed ones
 * 2.) Shared: Methods and properties defined on a prototype are shared among all instances 
 * 3.) Chain: The prototype itself is just another object, which has its own [[Prototype]], forming a chain
 * 
 * Prototypal inheritance:
 * It is the process of an object looking up the prototype chain to find properties or methods it doesn't have as its own property. 
 *   
*/

//Example with Constructor Functions (Pre-ES6 style) 
// 1. Constructor function
function Animal(name) {
  this.name = name; // Own property of the instance
}

// 2. Add a method to the constructor's prototype
Animal.prototype.eat = function() {
  console.log(this.name + ' is eating.'); // Shared method
};

// 3. Create an instance
const animal1 = new Animal('Dog');

// 4. Access the inherited method
animal1.eat(); // Output: Dog is eating.
console.log(animal1.hasOwnProperty('name')); // true
console.log(animal1.hasOwnProperty('eat')); // false (it's on the prototype)

// Check the link:
console.log(Object.getPrototypeOf(animal1) === Animal.prototype); // true


// Example with ES6 Classes (Syntactic Sugar) 
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof!');
  }
}

const dog1 = new Dog('Rex');
dog1.eat(); // Rex is eating. (Inherited from Animal.prototype)
dog1.bark(); // Woof! (Defined on Dog.prototype)
