/***
 *  Array programs
 */

// find  a pair of numbers that whose sum matches a target value;
function findPairsThatResolvesToNumber(arr,target){
  let results = [];
  for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
      const sum = arr[i] + arr[j];
      console.log(sum);
      if(sum === 10){
        results.push([arr[i],arr[j]])
      }
    }
  }
  return results;
}
// console.log(findPairsThatResolvesToNumber([1,2,3,4,5,6,7,8,9],10));

// optimised flow
function findPairsThatResolvesToNumber1(arr,target){
  let results = [];
  const seenNumbers = new Set();
  for(const num of arr){
    const complement = target - num;
    if(seenNumbers.has(complement)){
      results.push([num,complement])
    }
    seenNumbers.add(num)
  }
  return results;
}
// console.log(findPairsThatResolvesToNumber1([1,2,3,4,5,6,7,8,9],10));

// find Largest element in an array
function findLargestElement(arr){
  const sortedArray = arr.sort((a,b)=>a-b);
  return sortedArray[sortedArray.length - 1];
}

// console.log(findLargestElement([3,5,7,2,8,1,4]));
// complexity: O(nlogn) due to sorting


// optimised flow to find largest element in an array -> Complexity: O(n)
function findLargestElement1(arr){
  let  max = arr[0];
  for(let i=1;i<arr.length;i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max;
}
// console.log(findLargestElement1([3,5,7,2,8,1,4]));

// find the second largest and second smallest in an array
// bruteforce approach: sort the array and get the second last element
// optimal approach: 
function findSecondLargestElement(arr){
  const arrLength = arr.length;
  let small = -Infinity;
  let secondSmall = -Infinity;
  let large = -Infinity;
  let secondLarge = -Infinity;
  for(let i=0;i<arrLength;i++){
    small = Math.min(small,arr[i]);
    large = Math.max(large,arr[i]);
  }
  for(let i=0;i<arrLength;i++){
   if(arr[i] < secondSmall && arr[i] !==small){
    secondSmall  = arr[i]
   }
   if(arr[i] > secondLarge && arr[i] !== large){
    secondLarge = arr[i]
   }
  }
  return{
    large,
    small,
    secondLarge,
    secondSmall
  }
}
// console.log(findSecondLargestElement([3,5,7,2,8,1,4]));

// check if array is sorted or not;
function checkIfArrayIsSorted(arr){
  for(let i=1;i<arr.length;i++){
    if(arr[i] < arr[i+1]){
      return true
    }
    return false
  }
}
// console.log(checkIfArrayIsSorted([1,2,3,4,5])); // true
// console.log(checkIfArrayIsSorted([5,3,2,1])); // false 

// remove duplicates from an array:
function removeDuplicatesFromArray(arr){
  const bruteApproach = [...new Set(arr)];
  const alreadySeen = new Set();
  const results = [];
  for(let i=0;i<arr.length;i++){
    if(!alreadySeen.has(arr[i])){
      results.push(arr[i]);
    }
    alreadySeen.add(arr[i])
  }
  return {
    results,
    bruteApproach
  }
}
console.log(removeDuplicatesFromArray([1,2,2,3,4,4,5,6,7,7,8,9]));