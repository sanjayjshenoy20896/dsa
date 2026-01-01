//Stock Buy and Sell | (DP-35)

/***
 * Problem Statement
 * We are given an array Arr[] of length n. It represents the price of a stock on ‘n’ days. The following guidelines need to be followed:

1.We can buy and sell a stock only once.
2.We can buy and sell the stock on any day but to sell the stock, we need to first buy it on the same or any previous day.

We need to tell the maximum profit one can get by buying and selling this stock.
*/

function maximumProfitBruteforce(arr){
    let arrLen = arr.length;
    let maxProfit = 0;
    for(let i=0;i<arrLen;i++){
        for(let j=i+1;j<arrLen;j++){
            let profit = arr[j] -arr[i];
            maxProfit  = Math.max(maxProfit,profit);
        }
    }
    return maxProfit;
}
// complexity analysis -> Time complexity -> O(n2) space complexity -> O(1)
// console.log(maximumProfitBruteforce([7, 1, 5, 3, 6, 4]));
// console.log(maximumProfitBruteforce([7, 6, 4, 3, 1]));

function maximumProfitOptimal(arr){
    
    let arrLen = arr.len;
    
    // storing the maximum profit
    let maxProfit = 0;
    // initialise min price
    let minPrice = Infinity;

    for(let price of arr){
        // if current price is less then minimum price, switch to min price
        if(price<minPrice){
            minPrice = price
        }
        let profit = price - minPrice;
        maxProfit = Math.max(maxProfit,profit)
    }
    return maxProfit;
}
// complexity -> Time complexity -> O(N) Space complexity -> O(1)
// console.log(maximumProfitOptimal([7, 1, 5, 3, 6, 4]));
// console.log(maximumProfitOptimal( [7, 6, 4, 3, 1]));


/***
 * Check if array contains duplicates
 */


function doesArrayContainDuplicates(arr){
    let isDuplicate = false;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] == arr[j]){
                isDuplicate = true
            }
        }
    }
    return isDuplicate;
}
// time complexity -> 0(N2) Space complexity -> O(1)
// console.log(doesArrayContainDuplicates([1,2,3,4,1]));
// console.log(doesArrayContainDuplicates([1,2,3]))

function doesArrayContainDuplicatesBetterApproach(arr){
    arr.sort((a,b)=>a-b);
    let isDuplicate = false;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == arr[i-1]){
            isDuplicate = true
        }
    }
    return isDuplicate
}
// complexity analysis -> Time complexity -> O(n log n) Space complexity -> O(1)
// console.log(doesArrayContainDuplicatesBetterApproach([1,2,3,4,1]));
// console.log(doesArrayContainDuplicatesBetterApproach([1,2,3,4]))

function doesArrayContainDuplicatesOptimalApproach(arr){
    const uniqueElements = new Set(arr);
    return uniqueElements.size < arr.length;
} 
// complexity analysis -> Time complexity and space compelexity -> O(N)
// console.log(doesArrayContainDuplicatesOptimalApproach([1,2,3,4,2]));
// console.log(doesArrayContainDuplicatesOptimalApproach([1,2,3,4]))

// product of array except self
function productOfArrayExceptSelf(arr){
    const arrLen = arr.length;
    const result = Array(arrLen).fill(1);
    let leftProduct = 1;
    let rightProduct = 1;
    // compute the products to the left of the number
    for(let i=0;i<arrLen;i++){
        result[i] = leftProduct;
        leftProduct*=arr[i]
    }
    for(let i=arrLen-1;i>=0;i--){
        result[i] *= rightProduct;
        rightProduct*=arr[i]
    }
    return result
}
// compexity analysis -> Time complexity -> O(N) space complexity -> O(1)
// console.log(productOfArrayExceptSelf([1,2,3,4]));
// console.log(productOfArrayExceptSelf([-1,1,0,-3,3]));


// 3 Sum : Find triplets that add up to a zero

function tripletsThatAddUpToZeroBruteforce(arr){
    const arrLen = arr.length;
    const unique = new Set();

    for(let i=0;i<arrLen;i++){
        for(let j=i+1;j<arrLen;j++){
            for(let k = j+1;k<arrLen;k++){
                if(arr[i]+arr[j]+arr[k] === 0){
                    let temp = [arr[i],arr[j],arr[k]].sort((a,b)=> a-b);
                    unique.add(JSON.stringify(temp));
                }
            }
        }
    }
    // Convert set to array of arrays
    let ans = Array.from(unique).map(str => JSON.parse(str));
    return ans;
}

// console.log(tripletsThatAddUpToZeroBruteforce([-1,0,1,2,-1,-4]));
// Time Complexity: O(N2 * log(no. of unique triplets)),
// Space Complexity: O(2*N) + O(n)

// container with most water
function containerWithMostWater(containers){
    let maxWater = 0;
    let left = 0;
    let right = containers.length -1;
    while(left<right){
        // compute the min height between left and right;
        let currentHeight = Math.min(containers[left],containers[right]);
        let currentWidth = right - left;
        let currentArea = currentWidth * currentHeight;
        maxWater = Math.max(maxWater,currentArea);
        // Move the pointer of the shorter line inward
        if (containers[left] < containers[right]) {
            left++; // Move left pointer right
        } else {
            right--; // Move right pointer left
        }
    }
    return maxWater;
}
// Time complexity -> O(N);
// Space Complexity -> O(1);
// console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]))