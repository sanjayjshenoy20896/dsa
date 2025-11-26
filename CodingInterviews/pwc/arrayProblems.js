/***
 * Remove duplicates form the homogenous array
 * 
 */

function removeDuplicatesFromHomogenousArray(arr){
    const uniqueArray =  [...new Set(arr)];
    return uniqueArray.sort((a,b)=>a-b);
}

const uniqueArray = removeDuplicatesFromHomogenousArray([1,2,2,8,3,3,4,5])


// flatten nested arrays for heterogenous array;
/***
 * 
 * 
 * input [1,2,[[3,{'a':4}]],5,6,[7,{'b':8}],[0] ]
 * 
 * will need to check data-type of each value in array, 
 * if it contians an array, we need to spread the array into the original array 
 * if it a number , we check if it already exist in the set , push it into result
 * if it contains a object, use object .values and push it into original array
 */
function removeDupicatesAndFlattenArrays(arr){
    const result = []
    const dataAlreadyPresent = new Set();
    const inputArray = arr;
    while(inputArray.length){
        const value = inputArray.pop();
        if(Array.isArray(value)){
            inputArray.push(...value);
        }else if(typeof value === "object" && value!=null){
            inputArray.push(...Object.values(value))
        }else if(typeof value === "number" && !dataAlreadyPresent.has(value)){
            dataAlreadyPresent.add(value);
            result.unshift(value)
        }
    }
    return result;
}

const flattenNumbersArray = removeDupicatesAndFlattenArrays([1,2,[[3,{'a':4}]],5,6,[7,{'b':8}],[0] ])
// console.log(flattenNumbersArray);


// print numbers from 1 to n using recursion
function printToN(n){
    if(n<=100){
        console.log(n);
        printToN(n + 1)
    }
}
// printToN(1);
count=1;
// print numbers form 1 to n using asyncronous setTimeout or setInterval
function printToNAsync(){
    if(count<=100){
        console.log(count);
        count++;
        setTimeout(printToNAsync,0)
    }
} 
// printToNAsync();

//find largest and smallest number in an array
function findLargestAndSmallestNumberInArray(arr){
    const sortedArray = arr.sort((a,b)=>a-b);
    // console.log(sortedArray);
    const largestElement = sortedArray[sortedArray.length -1];
    const smallestElement = sortedArray[0];
    return {largestElement,smallestElement}
}

const {largestElement,smallestElement} = findLargestAndSmallestNumberInArray([3,5,1,8,0,-1,4]);
//console.log(`Largest Element is : ${largestElement} and Smallest Element is : ${smallestElement}`);


// implement reduce function
const array  = [1,2,3,4,5];
const sum = array.reduce((acc,cur)=>acc+cur);
// console.log(sum)

//find missinge number in an array of 1 to n;
function missingNumber(arr){
    const n = arr.length + 1;
    const arrSum = arr.reduce((acc,cur)=>acc+cur,0);
    let sum = (n * (n + 1)) / 2;
    return sum - arrSum;
}
const missingNum = missingNumber([1,2,3,5]);
// console.log("missingNum",missingNum);

// two sum problem
/***
 * The "Two Sum" problem in JavaScript involves finding two numbers in an array that add up to a specific target value and returning their indices. Each number can be used only once.
 * Approach:
 * 1. Create a map to store the numbers and their indices.
 * 2. Iterate through the array, for each number, calculate its complement (target - current number).
 * 3. Check if the complement exists in the map. If it does, return the indices of the current number and its complement.
 * 4. If not, store the current number and its index in the map for future reference.      
 */

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



// two sum problem - briuteforce approach
// time complexity O(n^2) , space complexity O(1)
function twoSumBruteForce(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === target){
                return {indexes: [i,j],values: [arr[i],arr[j]]}
            }
        }
    }
}
const result = twoSumBruteForce([2,7,11,15,6,3],9);
// console.log("bruteforce result",result);


// merge intervals

// rotate array
function leftRotateArray(arr,positions){
    const n  = arr.length;
    positions = positions % n; // in case positions is greater than array length
    return arr.slice(positions).concat(arr.slice(0, positions));
}

function rightRotateArray(arr,positions){
    const n  = arr.length;
    positions = positions % n; // in case positions is greater than array length
    return arr.slice(n-positions).concat(arr.slice(0, n - positions));
}

const originalArray = [1, 2, 3, 4, 5];
const leftRotatedArray = leftRotateArray(originalArray, 2);
const rightRotatedArray = rightRotateArray(originalArray, 2);
// console.log("Left Rotated Array:", leftRotatedArray); // Output: [3, 4, 5, 1, 2]
// console.log("Right Rotated Array:", rightRotatedArray); // Output: [4, 5, 1, 2, 3]

// peak element in array
function findPeakElement(arr){
    let low  = 0;
    let high = arr.length -1;
    while(low < high){
        let mid = Math.floor((low + high)/2);
        if(arr[mid] > arr[mid + 1]){
            high = mid;
        }else{
            low = mid + 1;
        }
    }
    return arr[low];
}
const peakElement = findPeakElement([1,3,20,4,1,0,5,6]);
// console.log("peakElement",peakElement);  