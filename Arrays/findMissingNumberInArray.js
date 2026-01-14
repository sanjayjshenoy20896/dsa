// find missing number in an array
// using math logic
function findMissingNumberInAnArray(arr){
  let n = arr.length +1;
  let sumArr = arr.reduce((acc,sum)=> acc+sum,0); //18
  let sumN = (n*(n+1))/2 //21
  return sumN - sumArr;
}

// using xor logic
function findMissingWithXor(arr) {
  const n = arr.length + 1;
  let xorSum = 0;

  // XOR all numbers from 1 to N
  for (let i = 1; i <= n; i++) {
    xorSum ^= i;
  }

  // XOR the result with all elements in the array
  for (const num of arr) {
    xorSum ^= num;
  }

  // The remaining value is the missing number
  return xorSum;
}
let inputArray = [1,2,4,5,6];
let output = findMissingNumberInAnArray(inputArray);
console.log(output);
let outputArray = findMissingWithXor(inputArray);
console.log(outputArray);



