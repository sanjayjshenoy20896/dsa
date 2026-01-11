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