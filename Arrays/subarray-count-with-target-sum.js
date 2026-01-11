// Count Subarrays having Sum K
function countSubArraysWithTargetSumBruteforce(arr,k){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        let currentSum = 0;
        for(let j=i;j<arr.length;j++){
            currentSum+=arr[j];
            if(currentSum ===k){
                count++
            }
        }
    }
    return count;
}
// compelxity analysis: Using Nested Loop - O(n2) Time and O(1) Space
console.log("countSubArraysWithTargetSumBruteforce");
console.log(countSubArraysWithTargetSumBruteforce([10, 2, -2, -20, 10],-10));


function countSubArraysWithTargetSumOptimalAppraoach(arr,k){
    let res = 0;
    let currentSum = 0;
    let prefixSum = new Map();
    for(let val of arr){
        currentSum+=val;

        if(currentSum === k){
            res+=1
        }

        if(prefixSum.has(currentSum - k)){
            res+= prefixSum.get(currentSum - k)
        }
        prefixSum.set(currentSum,(prefixSum.get(currentSum)|| 0)+1)
    }
    return res;
}
console.log("countSubArraysWithTargetSumOptimalAppraoach");
console.log(countSubArraysWithTargetSumOptimalAppraoach([10, 2, -2, -20, 10],-10))
