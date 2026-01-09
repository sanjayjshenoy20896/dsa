
/**
 * Kadane's Algorithm -> : Maximum Subarray Sum in an Array
 * Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.
 */

// optimal approach -> Time complexity:O(N2) , Space complexity: O(1)
function maximumSubArraySum(nums){
    let maxSum = -Infinity;
    for(let i=0;i<nums.length;i++){
        let sum = 0;
        for(let j=1;j<nums.length;j++){
            sum+=nums[j];
            maxSum = Math.max(maxSum,sum)
        }
    }
    return maxSum
}
// console.log(maximumSubArraySum( [5, 4, -1, 7, 8])); // 6

// optimal approach -> Time complexity: O(N) , Space complexity: O(1)
function kadanesAlgorithm(nums){
    let maxSum = -Infinity;
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sum>maxSum){
            maxSum = sum;
        }
        if(sum<0){
            sum = 0
        }
    }
    return maxSum;
}
// console.log(kadanesAlgorithm( [5, 4, -1, 7, 8]));
// 23

/**
 * Follow up to print the subarray along with the sum extending kadanes algorithm
 * 
 */
function kadanesAlgorithmWithSubarray(nums){
    let maxSum = -Infinity;
    let sum = 0
    let start = 0;
    let subarrayStart = -1;
    let subarrayEnd = -1;
    for (let i=0;i<nums.length;i++){
        if(sum === 0){
            start = i
        }

        // calculate the running sum
        sum+=nums[i];

        if(sum> maxSum){
            maxSum = sum
            subarrayStart = start;
            subarrayEnd = i
        }
        if(sum<0){
            sum = 0
        }
    }
    let subarray = nums.slice(subarrayStart,subarrayEnd+1);
    return {maxSum,subarray}
}
// console.log(kadanesAlgorithmWithSubarray( [5, 4, -1, 7, 8]));
// { maxSum: 23, subarray: [ 5, 4, -1, 7, 8 ] }



// 3 sum problem -> tripplet sum with zero

// bruteforce approach -> Time complexity: O(N3) , Space complexity: O(2N)
function threeSumApproachToZero(nums){
    const store = new Set();
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k] === 0){
                    let temp = [nums[i],nums[j],nums[k]].sort((a,b)=>a-b);
                    store.add(JSON.stringify(temp));
                }
            }
        }
    }
    let ans = Array.from(store).map((triplet)=> JSON.parse(triplet));
    return ans;
}

// console.log(threeSumApproachToZero([-1,0,1,2,-1,-4]));

// optimal approach:
// using hash and sort
// time complexity: O(N2) , Space complexity: O(2N + N)
function threeSumOptimalApproach(nums){
    let finalResult = new Set();
    
    for(let i=0;i<nums.length;i++){
        let hashSet  = new Set();
        for(let j=i+1;j<nums.length;j++){
            let complement = -(nums[i]+nums[j]);
            if(hashSet.has(complement)){
                let triplet = [nums[i],nums[j],complement].sort((a,b)=>a-b);
                finalResult.add(JSON.stringify(triplet));
            }
            hashSet.add(nums[j])
        }
    }
    return Array.from(finalResult).map(str => JSON.parse(str));
}

// console.log(threeSumOptimalApproach([-1,0,1,2,-1,-4]));

// better approach using sorting and two pointer
function threeSumBetterApproach(nums){
    let arr = nums.sort((a,b)=>a-b);
    let finalResult = [];
    for(let i=0;i<arr.length;i++){
        if(i>0 && arr[i] === arr[i-1]) continue; // skip duplicates for i
        let left = i+1;
        let right = arr.length -1;
        while(left<right){
            let sum = arr[i]+arr[left]+arr[right];
            if(sum === 0){
                finalResult.push([arr[i],arr[left],arr[right]]);
                left ++;
                right --;
                while(left<right && arr[left] === arr[left-1]) left++; // skip duplicates for left
                while(left<right && arr[right] === arr[right+1]) right--; // skip duplicates for right
            }else if(sum<0){
                left++;
            }else{
                right--;
            }
            
        }
    }
    return finalResult
}

// console.log(threeSumBetterApproach([-1,0,1,2,-1,-4]));

// 4 sum problem to a target value 

// bruteforce approach -> Time complexity: O(N4) , Space complexity: O(2N)
function fourSum(nums,target){
    let arrLen = nums.length;
    let str = new Set();
    for(let i=0;i<arrLen;i++){
        for(let j=i+1;j<arrLen;j++){
            for(let k=j+1;k<arrLen;k++){
                for(let l=k+1;l<arrLen;l++){
                    if(nums[i]+nums[j]+nums[k]+nums[l] === target){
                        let quad = [nums[i],nums[j],nums[k],nums[l]].sort((a,b)=>a-b);
                        str.add(JSON.stringify(quad))
                    }
                }
            }
        }
    }
    return Array.from(str).map((quad)=> JSON.parse(quad));
}
// console.log(fourSum([1,0,-1,0,-2,2],0));

//better approach:
// time complexity: O(N3) , Space complexity: O(2N + N)
function fourSumBetter(nums,target){
    let arrLen = nums.length;
    let finalResult =  new Set();

    for(let i=0;i<arrLen;i++){
        for(let j=i+1;j<arrLen;j++){
            let seen  =  new Set();
            for(let k=j+1;k<arrLen;k++){
                let complement = target - (nums[i]+nums[j]+nums[k]);
                if(seen.has(complement)){
                    let quad = [nums[i],nums[j],nums[k],complement].sort((a,b)=>a-b);
                    finalResult.add(JSON.stringify(quad))
                }
                seen.add(nums[k]);
            }
        }
    }
    return Array.from(finalResult).map((quad)=> JSON.parse(quad));
}

// console.log(fourSumBetter([1,0,-1,0,-2,2],0));


// Largest sub array with 0 Sum:
function largestSubarrayWithZeroSum(nums){
    let maxLength = 0;
    let sumIndexMap = new Map();
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        // check if the sum is equal to zero
        if(sum === 0){
            maxLength = i+1;
        }else if(sumIndexMap.has(sum)){
            // compute the length using previous index;
            maxLength = Math.max(maxLength, i - sumIndexMap.get(sum));
        }else{
            sumIndexMap.set(sum,i);
        }
    }
    return maxLength;
}
// console.log(largestSubarrayWithZeroSum([1, -1, 3, 2, -2, -8, 1, 7, 10, 23])); // 5
// console.log(largestSubarrayWithZeroSum([1, 2, 3])); // 0


//Count the number of subarrays with given xor K
// bruteforce approach -> Time complexity: O(N2) , Space complexity: O(1)
function countSubArraysWithXorK(nums, k){
    let count =0;
    let arrLen = nums.length;
    for(let i=0;i<arrLen;i++){
        let xorSum = 0;
        for(let j = i;j<arrLen;j++){
            xorSum ^= nums[j];
            if(xorSum === k){
                count++;
            }
        }
    }
    return count;
}
// console.log("countSubArraysWithXorK")
// console.log(countSubArraysWithXorK([4, 2, 2, 6, 4], 6)); 
// 4


// merge overlapping intervals
/**
 * Input : intervals=[[1,3],[2,6],[8,10],[15,18]]
Output : [[1,6],[8,10],[15,18]]
Explanation : Since intervals [1,3] and [2,6] are overlapping we can merge them to form [1,6] intervals.
 */
// bruteforce -> Time complexity: O(N2 + NLOGN) . space complexity: O(N)
function mergeOverlappingIntervalsBruteforce(intervals){
    const arrLen = intervals.length;
    let sortedIntervals = intervals.sort((a,b)=> a[0]-b[0]);
    const mergedIntervervals = [];
    let i = 0;
    while(i<arrLen){
        // take interval start and end
        let start = sortedIntervals[i][0];
        let end = sortedIntervals[i][1];
        let j = i+1;

        // merge overlapping intervals
        while(j<arrLen && sortedIntervals[j][0]<=end){
            // Extend the end as needed
            end = Math.max(end, intervals[j][1]);
            j++;
        }
        // Push merged interval to result
        mergedIntervervals.push([start, end]);

        // Move to next non-overlapping interval
        i = j;
    }       
    return mergedIntervervals
}

// console.log(mergeOverlappingIntervalsBruteforce([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]


// merge 2 sorted arrays without extra space
/*
* While merging 2 arrays in place without adding extra space , we append as many zeros as the length of second array to the end of first array.
Since both the arrays are sorted in descending order, the largest number in the end of the  each array.
we must compare from the end of both arrays and [place the largest number at the end of the first array.
*/

// time complexity: 0(n+m) , space complexity: O(1)
function merge2ArraysInPlace(arr1,arr1Len,arr2,arr2Len){
    let i = arr1Len -1; // last index of arr1
    let j = arr2Len -1; // last index of arr2   
    let k = arr1Len + arr2Len -1; // last index of merged array

    while(i>=0 && j>=0){
        if(arr1[i]>arr2[j]){
            arr1[k] = arr1[i];
            i--;
            k--;
        }else{
            arr1[k] = arr2[j];
            j--;
            k--;
        }
    }
    while(j>=0){
        arr1[k] = arr2[j];
        j--;
        k--;
    }
    return arr1;
}
// console.log(merge2ArraysInPlace([1,3,5,0,0,0],3,[2,4,6],3)); // [1,2,3,4,5,6]

// find the repeated number and missing number in the array;
function findMissingAndRepeatedOA1(nums){
    let arrLen = nums.length;
    let sumN = arrLen * (arrLen + 1) / 2; // sum of first n natural numbers
    let sumSquareN = (arrLen * (arrLen + 1) * (2 * arrLen + 1)) / 6; // sum of squares of first n natural numbers
    let actualSum  = nums.reduce((acc, val) => acc + val, 0);
    let actualSumSquare = nums.reduce((acc, val) => acc + val * val, 0);

    //compute the difference values
    let v1 = actualSum - sumN; 

    // S2 - S2n = X^2 - Y^2
    let v2 = actualSumSquare - sumSquareN;
    
    // Calculate X + Y using X + Y = (X^2 - Y^2) / (X - Y)
    v2 = v2 / v1;
     /* Calculate X and Y from X + Y and X - Y
           X = ((X + Y) + (X - Y)) / 2
           Y = X - (X - Y) */
    x = (v1 + v2) / 2;
    y = x - v1;
    return {repeatedNumber: Math.floor(x), missingNumber: Math.floor(y)};
}
// console.log(findMissingAndRepeatedOA1([3, 1, 3])); // { repeatedNumber: 3, missingNumber: 2 }


// maximum product to target:
// bruteforce approach -> Time complexity: O(N2) , Space complexity: O(1)
function maximumProductBruteforce(nums){
    let arrLen = nums.length;
    let maxProdValue = -Infinity;
    for(let i = 0;i<arrLen;i++){
        let prod = 1;
        for(let j=i;j<arrLen;j++){
            prod *= nums[j];
            maxProdValue = Math.max(maxProdValue, prod)
        }
    }
    return maxProdValue
}

console.log(maximumProductBruteforce([1,2,3,4,5,0])); // 120

// optimal approach
function maximumProductOptimal(nums){
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];
    for(let i=1;i<nums.length;i++){
        let curr = nums[i];
        if(curr<0){
            // swap max and min
            [maxProd,minProd] = [minProd,maxProd];
        }
        maxProd = Math.max(curr, maxProd * curr);
        minProd = Math.min(curr, minProd * curr);
        result = Math.max(result, maxProd);
    }
    return result
}
console.log(maximumProductOptimal([1,2,3,4,5,0])); // 120


// Max sum subarray of size K 
function maxSubArrayofSizeK(arr,k){
    let maxSum = 0;
    let currentWindowSum = 0;
    let arrLen = arr.length;

    for(let i=0;i<k;i++){
        currentWindowSum+=arr[i];
    }
    maxSum = currentWindowSum;
    for(let i=k;i<arrLen;i++){
        currentWindowSum+=arr[i];
        currentWindowSum-=arr[i-k];
        maxSum = Math.max(maxSum,currentWindowSum)
    }
    return maxSum;
}
console.log(maxSubArrayofSizeK([2,1,5,1,3],3));

// find the second largest element in a unsorted array;
function findSecondLargestElement(arr){
    let first = -Infinity;
    let second = -Infinity;
    for(let i=0;i<arr.length;i++){
        let currentNum = arr[i];
        if(currentNum > first){
            second = first;
            first = currentNum
        }else if(currentNum<first && currentNum>second){
            second = currentNum
        }
    }
    return second;
}
console.log(findSecondLargestElement([4,3,2,1]))


// find majority element of candidate
function findMajorityCandidate(arr){
    let vote_count = 0;
    let element = 0;
    let n = arr.length;
    for(let i=0;i<n;i++){
        let currentNumber = arr[i];
        if(vote_count == 0){
            candidate = currentNumber;
        }
        if(currentNumber == candidate){
            vote_count++
        }else{
            vote_count--
        }
    }
    return candidate;
}
console.log(findMajorityCandidate([2,2,1,1,2]))