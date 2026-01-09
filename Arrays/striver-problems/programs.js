/***
 *  Array programs
 */

// find  a pair of numbers that whose sum matches a target value;
function findPairsThatResolvesToNumber(arr,target){
  let results = [];
  for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
      const sum = arr[i] + arr[j];
      // console.log(sum);
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
// console.log(leftRotateArrayByOnePlace([1,2,3,4]))


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


// move zeros to the end without using extra variables;
function moveAllZerosToTheEnd(arr){
  let zeroCount = 0;
  const arrLength = arr.length;
  for(let i=0;i<arrLength-1;i++){
    if(arr[i] === 0){
      arr.splice(i,1);
      zeroCount+=1;
      i--
    }
  }
  while(zeroCount!=0){
    arr.push(0);
    zeroCount-=1;
  }
  return arr;
}
// console.log("moveAllZerosToTheEnd");
// console.log(moveAllZerosToTheEnd([1,0,4,5,6,0,0,8,4]))
// time complexity -> (m+n log(m+n))
// space complexity -> O(m+N)
function findUnionOfTwoArrays(arr1,arr2){
  let array = new Set([...arr1,...arr2]);
  return Array.from(array).sort((a,b)=> a-b);
}

//union of two arrays using 2 pointer approach.



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
// console.log(sortAnArrayWithNumbersTogether([0,1,2,0,0,2,1,1,3,4,0,0,1,2,6]))

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

// two sum problem -> bruteforce problem
function TwoSumProblemBruteforce(arr,target){
  let arrLen = arr.length;
  for(let i=0;i<arrLen;i++){
    for(let j=i+1;j<arrLen;j++){
      if(arr[j] + arr[i] === target){
        return {
          indices:[i,i+1],
          values: [arr[i],arr[i+1]]
        }
      }
    }
  }
  return {
    indices:[-1,-1],
    values:[]
  }
}
const indices = twoSum([2,7,11,15,6,3],9);
const twoSumIndices = TwoSumProblemBruteforce([2,7,11,15,6,3],9)
// console.log("twoSumIndices",twoSumIndices);
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
// console.log(output)

// find the number that appears once and rest twice

//bruteforce 
// time complexity -> O(n2)
function findANumberThatAppearsTwiceAndRestOnceBruteforce(arr){
  const n = arr.length;
  for(let i=0;i<n;i++){
    let num = arr[i];
    let count = 0
    for(let j =1;j<n;j++){
      if(arr[j] === num){
        count+=1;
      }
    }
    if(count === 1){
      return num;
    }
  }
  return -1;
}
// console.log(findANumberThatAppearsTwiceAndRestOnceBruteforce([2,2,1]));

//  using hashmap for spotting occurance and looping through hashmap
function findANumberThatAppearsTwiceAndRestOnceHashMapApproach(arr){
  const n = arr.length;
  const max = Math.max(...arr);
  // console.log("max: ",max);
  const hashmap = Array(max + 1).fill(0);
  for(let i = 0;i<n;i++){
    hashmap[arr[i]]++;
  }
  // console.log(hashmap)
  for(let j=0;j<n;j++){
    if(hashmap[arr[j]] ===1){
      return j
    }
  }
  return -1;
}
// console.log(findANumberT
// findANumberThatAppearsTwiceAndRestOnceHashMapApproach([2,2,1]));

// optimal approach: using XOR appraoch:
function findANumberThatAppearsTwiceAndRestOnceusingXORApproach(arr){
  let xor = 0;
  for(let i = 0;i<arr.length;i++){
    xor^=arr[i]
  }
  return xor;
}
// console.log(findANumberThatAppearsTwiceAndRestOnceusingXORApproach([2,2,1,3]))

//Longest Subarray with given Sum K(Positives)

function findLongestSubArrayWithTargetSum(arr,target){
 let n = arr.length;
 let left = 0;
 let right = 0;
 let maxLen = 0;
 let sum = arr[0];

 while(right <n){

  //shrink the window if sum exceeds target
  while(left<=right && sum > target){
    // decrement the sum with left pointer index and increment the left pointer.
    sum -= arr[left];
    left++;
  }
  // sum is equal to target, find the maxLength between currentlength and past length
  if(sum === target){
    maxLen = Math.max(maxLen,right-left+1);
  }
  // increment the right pointer
  right++;
  // if right is less than the length od array, add the sum with right pointer
  if(right<n) sum+=arr[right]

 }
 return maxLen;
}

// console.log(findLongestSubArrayWithTargetSum([10, 5, 2, 7, 1, 9],15))


// in palce sort an array by placing all zeros together, all ones together and all twos together;
// Bruteforce
function sortArrayWithZeroOneTwo(arr){
  const arrLen = arr.length;
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;
  for(let i=0;i<arrLen;i++){
    if(arr[i] === 0){
      arr.splice(i,1)
      zeroCount++
    }else if(arr[i] === 1){
      arr.splice(i,1);
      oneCount++
    }else if(arr[i] === 2){
      arr.splice(i,1)
      twoCount++
    }
  }
  while(twoCount!=0){
    arr.unshift(2)
  }
  while(oneCount!=0){
    arr.unshift(1)
  }
  while(zeroCount!=0){
    arr.unshift(0)
  }
  return arr;
}
// console.log(sortAnArrayWithNumbersTogether([1, 0, 2, 1, 0,3]))

// solve using counting nos approach
function sortAnArrayWithNumbersTogetherCountingApproach(arr){
  const arrLen = arr.length;
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;
  for(let i=0;i<arrLen;i++){
    if(arr[i] === 0){
      zeroCount++
    }else if(arr[i] === 1){
      oneCount++
    }else if(arr[i] === 2){
      twoCount++
    }
  }
  for(let i=0;i<zeroCount;i++){
    arr[i] = 0
  }
  for(let i=zeroCount;i<zeroCount+oneCount;i++){
    arr[i] = 1
  }
  for(let i= zeroCount+oneCount; i< zeroCount+oneCount+twoCount;i++){
    arr[i] = 2
  }
  return arr;
}
// console.log("sortAnArrayWithNumbersTogetherCountingApproach");
// console.log(sortAnArrayWithNumbersTogetherCountingApproach([1, 0, 2, 1, 0,3,4]))
// solve using dutch national flag 
// incomplete
function sortAnArrayWithNumbersTogether(arr){
  const arrLen = arr.length;
  let low = 0; 
  let high = arrLen - 1;
  let mid = 0;
  while(mid<=high){
    if(arr[mid] == 0){

    }

  }
}



// find majority element (N/2)
// bruteforce
function findMajorityElement(arr){
  const arrLen = arr.length;
  let map = new Map();
  for(num of  arr){
    map.set(num,(map.get(num) || 0) + 1)
  }
  for(let [key,value] of map.entries()){
    if(value > arrLen/2){
      return key;
    }
  }
}


// time complexity -> O(N), Space complexity -> O(N)
// console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2]))

//optimised approach -> incomplete
function findMajorityElementOptimalApproach(arr){
  
}
// find Majority element -> n/3
function findMajorityElement3(arr){
   const arrLen = arr.length;
  let map = new Map();
  for(num of  arr){
    map.set(num,(map.get(num) || 0) + 1)
  }
  for(let [key,value] of map.entries()){
    if(value > arrLen/3){
      return key;
    }
  }
}
// time complexity -> O(N), Space complexity -> O(N)
// console.log("find majprity number size:n/3");
// console.log(findMajorityElement3([1, 2, 1, 1, 3, 2]))
// buy and sell stocks

// bruteforce approach:
function buyAndSellStocks(arr){
  let maxProfit = 0;
  for(let i=0;i<arr.length;i++){
    for(let j = i+1;j<arr.length;j++){
      //calculate profit
      let profit = arr[j] - arr[i];
      maxProfit = Math.max(maxProfit,profit)
    }
  }
  return maxProfit;
}
// time-complexity -> O(N2) space-complexity -> 0(1)
// console.log(buyAndSellStocks([7,1,5,3,6,4]));

//optimal approach
function buyAndSellStocksOptimalApproach(arr){
  let minPrice = Infinity;
  let maxProfit = 0;
  for(num in arr){
    if(num < minPrice){
      minPrice = num;
    }else{
      maxProfit = Math.max(maxProfit,num-minPrice)
    }
  }
  return maxProfit;
}
// time complexity -> O(N) Space complexity -> O(1)
// console.log(buyAndSellStocksOptimalApproach([7,1,5,3,6,4]));

// alternatively arrange +ve and -ve numbers
function alternatePositiveAndNegativeNumbers(arr){
  let positiveArr = [];
  let negativeArr = [];
  let arrLen = arr.length;
  for(let i=0;i<arr.length;i++){
    if(arr[i] >=0){
      positiveArr.push(arr[i])
    }else{
      negativeArr.push(arr[i])
    }
  }
  for(let i=0;i<Math.floor(arrLen/2);i++){
   arr[2*i] = positiveArr[i]
   arr[2*i + 1] = negativeArr[i] 
  }
  return arr;
}
// time complexity -> O(N + N/2) space complexity ->O(N/2 + N/2);
// console.log(alternatePositiveAndNegativeNumbers([1,2,-4,-5]))

function alternatePositiveAndNegativeNumbersOptimalApproach(arr){
  const arrLen = arr.length;
  const positive = 0;
  const negative = 1;
  const ans = new Array(arrLen).fill(0);
  for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
      ans[negative] = arr[i];
      negative+=2;
    }else{
      ans[positive] = arr[i];
      positive+=2
    }
  }
  return ans
}
// time complexity -> O(N) Space complexity -> O(N)
// console.log(alternatePositiveAndNegativeNumbersOptimalApproach([1,2,-4.-5]))


// leaders in a array

//bruteforce method:
function  findANumberLeadersInArrayBruteforce(arr){
  let ans = [];
  for(let i=0;i<arr.length;i++){
    let leader = true;
    for(let j=i+1;j<arr.length;j++){  
      if(arr[j] >= arr[i]){
        leader = false;
        break;
      }
    }
    if(leader){
      ans.push(arr[i])
    }
  }
  return ans;
}
// time complexity -> O(N2) Space complexity -> O(1)
// console.log(findANumberLeadersInArrayBruteforce([1, 2, 5, 3, 1, 2]))

//optimal solution
function findANumberLeadersInArrayOptimal(arr){
  let ans = [];
  let max = arr[arr.length - 1];
  ans.push(arr[arr.length-1]);
  for(let i=arr.length-2;i>=0;i--){
    if(arr[i] > max){
      ans.push(arr[i]);
      max = arr[i]
    }
  }
  return ans.reverse();
}
// time complexity -> O(n) space complexity -> O(1)
// console.log(findANumberLeadersInArrayOptimal([1,2,5,3,1,2]));

// utility
function linearSearch(nums,key){
  for(let i=0;i<nums.length;i++){
    if(nums[i] === key){
      return true;
    }
  }
}
// longest sequence of consecutive numbers
function longestSequenceOfConsecutiveNumbers(nums){
  const arrLen = nums.length;
  let longest = 1;
  if(arrLen === 0){
    return 0;
  }
  for(let i=0;i<arrLen;i++){
    let x = nums[i];
    let cnt = 1;
    while(linearSearch(nums,x+1)){
      x+=1;
      cnt+=1
    }
    longest = Math.max(longest,cnt);
  }
  return longest;
}
// time complexity -> O(N2) space complexity -> O(1)
// console.log(longestSequenceOfConsecutiveNumbers([100, 4, 200, 1, 3, 2]));



// second largest number and second smallest element in an unsorted array:


// bruteforce method: Sort the array and find the appropraitye method
// better solution:
// steps:
// perform a single traversal to find the largest  and smallest element
// perform a traversal to find the element greater the smallest element -> second smallest
// perform a traversal to find the element less then the largesr elemnt -> second largest 
function findSecondLargestElementAndSecondSmallestElement(arr){
  // length of array
  let arrLen = arr.length;
  
  // initialise variables to record the second largest and second smallest
  let smallest = Infinity;
  let second_smallest = Infinity;
  let largest = -Infinity;
  let second_largest = -Infinity;

  if(arrLen === 0 || arrLen === 1){
    return {
      smallest:-1,
      second_smallest:-1,
      largest:-1,
      second_largest:-1
    }
  }
  // find the largest element and the smallest element;
  for(let i=0;i<arrLen;i++){
    smallest = Math.min(smallest,arr[i]);
    largest  = Math.max(largest,arr[i]);
  }

  // find the second laregst element and second smallest elemnt
  for(let i=0;i<arrLen;i++){
    if(arr[i] < second_smallest && arr[i]!=smallest){
      second_smallest = arr[i]
    }
    if(arr[i] > second_largest && arr[i]!=largest){
      second_largest = arr[i]
    }
  }
  return {
    smallest,
    largest,
    second_smallest,
    second_largest
  }
}
// 1 -> smallest
// 2 -> second smallest
// 7 -> largest
// 6 -> second largest
// time complexity -> 0(N) space complexity -> 0(1)
// console.log(findSecondLargestElementAndSecondSmallestElement([1, 2, 4, 6, 7, 5]));

// Longest Subarray with sum K | [Postives and Negatives]
// Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

// bruteforce
function findLongestSubArrayWithTargetSum(arr,k){
  let arrLen = arr.length;
  let maxSumLen = 0;

  // 2 nested loops through the length of array
  for(let i=0;i<arrLen;i++){
    for(let j=i;j<arrLen;j++){
      let sum = 0;
      //calculate the sum of subarray from   i to j 
      for(let index = i;index<=j;index++){
        sum+=arr[index];
      }
      
      // check if sum  === k, compute the max length of subarray with target sun
      if(sum == k){
        maxSumLen = Math.max(maxSumLen,j-i+1);
      }      
    }
  }
  return maxSumLen;
}
// time complexity -> O(N3) space complexity -> O(1);
// console.log(findLongestSubArrayWithTargetSum([2,3,5],5));
// console.log(findLengthOfSubarrayForTargetSum([-1,1,1],1));

// better approach
function findLongestSubArrayWithTargetSumBetterApproach(arr,k){
  let arrLen  = arr.length;
  let maxSumLen = 0;

  for(let i=0;i<arrLen;i++){
    let sum = 0;
    for(let j=i;j<arrLen;j++){
      // add the sum with current j index
      sum +=arr[j];
      // check sum is equal to target sum  
      if(sum === k){ 
        // Calculate the length of the subarray (j - i + 1)
        // Update maxLen if this subarray is longer 
        maxSumLen = Math.max(maxSumLen,j-i+1);
      }

    }
  }
  return maxSumLen;
}

// time complexity -> O(N2) Space complexity -> 0(1)
// console.log(findLongestSubArrayWithTargetSumBetterApproach([2,3,5],5));
// console.log(findLongestSubArrayWithTargetSumBetterApproach([-1,1,1],1));

// count length of subarray whose target sum equals k
// bruteforce approach
function countLengthOfSubArrayWithTargetSum(arr,k){
  let arrLen =arr.length;
  let count = 0;
  for(let i=0;i<arrLen;i++){
    let sum = 0;
    for(let j=i;j<arrLen;j++){
      sum+=arr[j]

      if(sum === k){
        count+=1;
      }
    }
    
  }
  return count;
}
// time complexity -> O(N2) Space complexity -> 0(1)
console.log(countLengthOfSubArrayWithTargetSum([3,1,2,4],6));
console.log(countLengthOfSubArrayWithTargetSum([1,2,3],3))


// find the kth largest element
// time complexity: O(n logn) space complexity: O(N)
function findKthLargestElementBySortingTheArray(arr,k){
  arr.sort((a,b)=> b-a);
  return arr[k - 1];
}

console.log(findKthLargestElementBySortingTheArray([1,2,3,4],2));
console.log(findKthLargestElementBySortingTheArray([1,15,17,9,12,2],2))

// find the kth largest element by removing duplicates and sorting the array
function findKthLargestElementBySortingTheArrayAndRemovingDuplicates(arr,k){
  let inputArr = [... new Set(arr)]
  inputArr.sort((a,b)=> b-a);
  return arr[k-1];
}

console.log(findKthLargestElementBySortingTheArrayAndRemovingDuplicates([1,15,17,9,12,2,12],2));

// find the kth largest element by using the priority queue
// time complexity -> O(N * LOG K) space complexity -> O(K)
function findKthLargestElementByUsingPriorityQueue(arr,k){
   // Min heap to store K largest elements
  let priorityQueue = [];
  arr.forEach((number)=>{
    priorityQueue.push(number);
    priorityQueue.sort((a,b)=> a-b);
    if(priorityQueue.length>k){
      priorityQueue.shift()
    }
  })
  return priorityQueue[0];
}
console.log(findKthLargestElementByUsingPriorityQueue([1,15,17,9,12,2,2,2,2],2))


// finding the kth smallest element by sorting the array
function findKthSmallestElementBySortingArray(arr,k){
  arr.sort((a,b)=> a-b);
  return arr[k-1]
}
console.log(findKthSmallestElementBySortingArray([1,15,17,9,12,2],2))

// finding the kth smallest element by sorting the array and removing duplicates
function findKthSmallestElementBySortingArrayAndRemovingDuplicates(arr,k){
  let inputArr = [...new Set(arr.sort((a,b)=> a-b))];
  return inputArr[k-1];
}
console.log(findKthSmallestElementBySortingArrayAndRemovingDuplicates([1,15,17,9,12,2,2],2))


// find the kth smalles element by using priority queue
// time complexity -> O(N * LOG K) space complexity -> O(K)
function findKthSmallestElementByUsingPriorityQueue(arr,k){
  let pq = [];
  arr.forEach((number)=>{
    pq.push(number);
    pq.sort((a,b)=>b-a);
    if(pq.length >k){
      pq.shift()
    }
  })
  return pq[0];  
}
console.log(findKthSmallestElementByUsingPriorityQueue([1,15,17,9,12,2],2))