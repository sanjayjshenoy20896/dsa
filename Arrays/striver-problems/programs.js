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

// incomplete
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
// console.log(removeDuplicatesFromArray([1,2,2,3,4,4,5,6,7,7,8,9]));

// left rotate array by 1
function leftRotateArrayByOnePlace(arr){
  const temp  = arr[0];
  for(let i=1;i<arr.length;i++){
    arr[i-1] = arr[i]
  }
  arr[arr.length-1] = temp;
  return arr;
}
console.log(leftRotateArrayByOnePlace([1,2,3,4]))


// left rotate by N places
function leftRotateByNPlaces(arr,n){
  const k = arr.length;
  const rotations = n%k;
  const rotatedPart = arr.slice(0,rotations);
  const remainingPart = arr.slice(rotations);
  return [...remainingPart,...rotatedPart];
}
// console.log(leftRotateByNPlaces([1,2,3,4],1));
// 2341

function rightRotateByNPlaces(arr,n){
  const k = arr.length;
  const rotations = n%k;
  const rotatedPart = arr.slice(k-rotations); 
  const remainingPart = arr.slice(0,k-rotations); 
  return [...rotatedPart,...remainingPart]
}
// console.log(rightRotateByNPlaces([1,2,3,4],1));
//4123


// move all zeros to end of the array;
// bruteforce approach:
function moveAllZerosToend(arr){
  const zeroArray = [];
  const numberedArray = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i] === 0){
      zeroArray.push(arr[i])
    }else{
      numberedArray.push(arr[i])
    }
  }
  return [...numberedArray,...zeroArray];
}
// console.log(moveAllZerosToend([1,0,4,5,6,0,0,8,4]))

function findUnionOfTwoArrays(arr1,arr2){
  let array = new Set([...arr1,...arr2]);
  return Array.from(array).sort((a,b)=> a-b);
}


function findMissingNumberInArray(arr){
  const N = arr.length + 1;
  const arrSum = arr.reduce((acc,cur)=>acc+cur);
  const nSum = N * (N+1) /2
  return nSum - arrSum;
}
// console.log(findMissingNumberInArray([1,2,4]));

function maximumNumberOfOnesAndZerosInArray(arr){
  let zeroCount = 0;
  let oneCount = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i] === 0){
      zeroCount+=1
    }else if( arr[i] == 1){
      oneCount+=1
    }
  }
  return {
    zeroCount,oneCount
  }
}
// console.log(maximumNumberOfOnesAndZerosInArray([1,0,9,8,7,1,1,0,1,0,0,0,7,8,3,0,1]))
// zero -> 6
// ones -> 5


// maximum consecutive ones in array of numbers
function countMaxConsecutiveTargetNumber(nums,target){
  let count =0;
  let max = 0;
  for(let i = 0;i<nums.length;i++){
    if(nums[i] === target){
      count++
    }else{
      count = 0
    }
    max = Math.max(count,max)
  }
  return max;
}
// console.log(countMaxConsecutiveTargetNumber([1,0,9,8,7,1,1,0,1,0,0,0,7,8,3,0,1],0))

function findANumberThatAppearsTwiceAndRestOnce(arr){
  let length = arr.length;
  let max = Math.max(...arr);
  const hash = Array(max+1).fill(0);
  for(let i=0;i<arr.length;i++){
    hash[arr[i]]++
  }
  for(let i=0;i<length;i++){
    if(hash[arr[i]] === 1){
      return arr[i]
    }
  }
  return-1;
}
// console.log(findANumberThatAppearsTwiceAndRestOnce([1,4,4,2,3,1]))


//longest subarray with target sum k(positives); -> revise
function findLengthOfSubarrayForTargetSum(arr,target){
  const n = arr.length;

   // To store the maximum length of the subarray
        let maxLen = 0;
        
        // Pointers to mark the start and end of window
        let left = 0, right = 0;
        
        // To store the sum of elements in the window
        let sum = arr[0];
        
        // Traverse all the elements
        while (right < n) {
            
            // If the sum exceeds K, shrink the window
            while (left <= right && sum > target) {
                sum -= arr[left];
                left++;
            }
            
            // Store the maximum length
            if (sum === target) {
                maxLen = Math.max(maxLen, right - left + 1);
            }
            
            right++;
            if (right < n) sum += arr[right];
        }
        
        return maxLen;
}
// console.log(findLengthOfSubarrayForTargetSum([10,5,2,7,1,9],15));

// sort an array of 0's , 1's and 2's
function sortAnArrayWithNumbersTogether(arr){
  let ones = 0;
  let twos = 0;
  let zeros = 0;
  let others = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i] === 0){
      zeros++
    }else if(arr[i] == 1){
      ones++
    }else if(arr[i] == 2){
      twos++
    }else{
      others.push(arr[i])
    }
  }
  return [].concat(Array(zeros).fill(0)).concat(Array(ones).fill(1)).concat(Array(twos).fill(2)).concat(...others);
}
console.log(sortAnArrayWithNumbersTogether([0,1,2,0,0,2,1,1,3,4,0,0,1,2,6]))

// two sum problem
function twoSum(arr,target){
    const numMap = {};

    for(let i=0;i<arr.length;i++){
        const currentNum = arr[i];
        const complement = target - currentNum;
        if(numMap[complement] !== undefined){
            return [numMap[complement],i]
        }
        numMap[currentNum] = i;
    }
    return numMap; 
}
//time complexity O(n) , space complexity O(n)
const indices = twoSum([2,7,11,15,6,3],9);
// console.log("indices",indices);

//Majority element - > The majority element of an array is an element that appears more than n/2 times in the array. The array is guaranteed to have a majority element.


function findMajorityElement(arr){
  let n = arr.length;
  for(let i=0;i<arr.length;i++){

    let count = 0;
    for(let j = 0;j<arr.length;j++){
      if(arr[j] === arr[i]){
        count++;
      }
      if(count<Math.floor(n/2)){
        return arr[i]
      }
    }
  }
}
// console.log(findMajorityElement([7, 0, 0, 1, 7, 7, 2, 7, 7]))

// move non zeros to end of the array using in place logic
const arr = [1,0,9,0,3,0,0,6];
// out put -> 1,9,3,6,0,0,0,0

function moveZerosToTheEnd(inputArray){
  const arrLen = inputArray.length;
  let  zerosCount = 0;
  for(let i=0;i<arrLen - 1;i++){
    if(inputArray[i] === 0){
      inputArray.splice(i,1)
      zerosCount++;
      i--;    
    }
  }
  while(zerosCount>=0){
    inputArray.push(0)
    zerosCount--
  }
  return inputArray
}

const output = moveZerosToTheEnd(arr);
console.log(output)

