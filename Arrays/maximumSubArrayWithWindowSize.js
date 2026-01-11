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