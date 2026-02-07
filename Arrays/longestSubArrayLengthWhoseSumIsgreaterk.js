//To find the length of the longest subarray with a sum greater than or equal to k in JavaScript, the optimal approach depends on whether the array contains negative numbers. 

function findLengthOfLongestSubArrayWithSumGreaterOrEqualTargetSum(arr,k){
    let sum = 0;
    let maxLength = -Infinity;
    let left = 0;
    let right = 0;
    let n = arr.length;
    for(right=0;right<n;right++){
        sum+=arr[right];
        while(sum>=k){
            maxLength = Math.max(maxLength,right-left+1);
            sum-=arr[left];
            left++
        }
    }
    return maxLength;
}

console.log(findLengthOfLongestSubArrayWithSumGreaterOrEqualTargetSum([1, 2, 3, 1, 1, 1, 1],3))