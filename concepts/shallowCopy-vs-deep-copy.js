/***
 * Shallow copy VS Deep copy
 * Shallow Copy:
 * it duplicates the top-level properties but shares references to any nested objects or arrays.
 * Any changes to the reference will also update the original object
 * 
 * Deep Copy:
 * duplicates all levels of the object, including all nested structures, creating a completely independent copy
 * Any changes to copy will not update the original object
 * This is creates an independent copy of the original object.
 * This makes the all copies independent.
 * It is usefull in state management.
 * 
 * 
 * Shallow Copy methods:
 * a.) Spread Syntax: const shallowCopy  = {...originalObj};
 * b.) Object.assign: const shallowCopy = Object.assign({},originalObj);
 * c.) Array.prototype.slice(): Array.from() / slice()
 * 
 * Deep Copy methods:
 * JSON.parse(JSON.stringify()): A common hack, but it fails with functions, Dates, Symbols, and circular references.
 * structuredClone(): A modern, built-in function that safely and reliably creates deep copies for most standard data types and handles circular references gracefully
 * Libraries: For highly complex scenarios or environments where structuredClone() isn't available, libraries like Lodash offer a robust _.cloneDeep() method. 
 */

const originalObj = {
    firstName:"Sanjay",
    lastName:"Shenoy",
    age:28,
    interests:["football"]
} 
const shallowCopy1 = {...originalObj};
const shallowCopy2 = Object.assign({},originalObj);
shallowCopy1.interests.push("cricket")
shallowCopy2.interests.push("basketball")
console.log("originalObj",originalObj)
console.log("shallowCopy1",shallowCopy1);
console.log("shallowCopy2",shallowCopy2);


const originalObj1= {
    firstName:"sanjay",
    lastName:"Shenoy",
    age:29,
    interests:["football"]
}
const deepClone = JSON.parse(JSON.stringify(originalObj1));
deepClone.interests.push("basketBall");
console.log("originalObj1:",originalObj1);
console.log("deepClone:",deepClone)




