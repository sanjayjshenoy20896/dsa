console.log("insertion of arrays");

let numbers = [1,2,3,4];
let strings = ["sam","tom","jim","jack"];
numbers[2] = 5;
strings[0] = "sanjay";
console.log("numbers",numbers);
console.log("string",strings);

//array bound check
console.log("numbers",numbers[4]);
console.log("numbers length",numbers.length);
console.log("strings length",strings.length);
console.log("s strings length",strings[0].length);

strings.splice(0,0,"vandana")
console.log("string",strings);

let myNumbers =  [1,2,4,5];
let insertIndex = 2;
let valueToInsert = 3;
let valuestoInsert = [3,3.1,3.2];
// myNumbers.splice(insertIndex,0,valueToInsert)
myNumbers.splice(insertIndex,0,...valuestoInsert);
console.log(myNumbers);