console.log("delete an item form an array");

let numbers = [10,20,30,40,50];
let  deleteIndex = 2;
const filteredNumbers = numbers.filter((number)=>number!=30)
numbers.splice(deleteIndex,1);
console.log(numbers)
console.log(filteredNumbers)
