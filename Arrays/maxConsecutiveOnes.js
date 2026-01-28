/**
 * Max Consecutive ones
 *  Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 */


function maxConsecutiveOnes3(nums, k) {
    const n  =nums.length;
    let left = 0;
    let maxLength = 0;
    let zeroCount = 0;

    for(let right = 0;right<n;right++){
        if(nums[right]===0){
            zeroCount++
        }
        while(zeroCount>k){
            if(nums[left] === 0){
                zeroCount--;
            }
            left++
        }
        const len = right-left+1
        maxLength = Math.max(maxLength,len);
    }
    return maxLength;
}
console.log("maxConsecutiveOnes3");
console.log(maxConsecutiveOnes3([1,1,1,0,0,0,1,1,1,1,0],2)); // 6
console.log(maxConsecutiveOnes3([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3)); // 10