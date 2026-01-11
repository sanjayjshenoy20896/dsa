
function consecutiveSumToTarget(arr,k){
    let left = 0;
    let right =0;
    let currentSum = 0;
    
    // loop to continue till the right pointer reaches the end of the array
    while(right<arr.length){
        // compute the running sum with right pointer and store in current sum
        currentSum+=arr[right];

        // while the cuurent sum is greater than the target sum
        while(currentSum>k){
            currentSum-=arr[left];
            left++;
        }

        if(currentSum === k){
            return [left,right]
        }
        right++
    }
    return null;
}
console.log("consecutiveSumToTarget");
console.log(consecutiveSumToTarget([2, 3, 5, 1, 4, 7, 10],10))
console.log(consecutiveSumToTarget([1,2,3,5,2],8));