/**
 * Object:
 * object comparison can be categorized into 
 * referential equality (checking if variables point to the same instance)
 * deep equality (checking if objects have the same content). 
 * 
 * 
 */

/**
 * Referential Equality
 * They check if it poiunts to same instrance of the object.
 * There are three ways to do this
 * 1.) Loose equality: ==
 * 2.) Strict equality: ===
 * 3.) Object.is()
 */
const obj1 = {a:"1"};
const obj2 = {a:"1"};
const obj3 = obj1;
console.log(obj1 === obj2) //false //pointing to different object instances
console.log(obj1 === obj3) //true // new variable points to same object instance

/**
 * Deep Equality (Comparing by Value)
 * Most of the time, you will want to compare objects by their content (deep equality). JavaScript does not have a built-in operator for deep equality, so custom solutions or libraries are needed. 
 */

// Custom Deep Comparison Function
// This recursive function handles nested objects by calling itself when property values are also objects.

function areObjectsDeepEqual(object1,object2){
    let objectKeys1 = Object.keys(object1);
    let objectKeys2 = Object.keys(object2);
    
    // check if the keys of both object match by length
    if(objectKeys1.length !== objectKeys2.length){
        return false
    }
    for(let key of objectKeys1){
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects  = typeof val1 === "object" && val1!== null && typeof val2 === "object" && val2!=null;
        if(areObjects && !areObjectsDeepEqual(val1,val2) || !areObjects && val1!=val2){
            return false
        }
    }
    return true;
}

const hero1 = { name: 'Batman', address: { city: 'Gotham' } };
const hero2 = { name: 'Batman', address: { city: 'Gotham' } };
console.log(areObjectsDeepEqual(hero1,hero2))

// Using JSON stringfy:
// A simple trick for objects that contain only primitive data is to convert them into JSON strings and compare the strings. 

const objA = { a: 1, b: 2 };
const objB = { a: 1, b: 2 };
console.log(JSON.stringify(objA) === JSON.stringify(objB)); // true
// Limitations: The order of keys matters, and properties with undefined values or functions are ignored, which can lead to incorrect results.