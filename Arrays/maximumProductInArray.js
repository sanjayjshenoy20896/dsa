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