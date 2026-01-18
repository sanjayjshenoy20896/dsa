// longest sub array with zero sum


function longestSubArrayWithZeroSum(arr){
    let n = arr.length;
    // variable to compute length of sub array
    let maxLen = 0;
    // variable to calculate running sum
    let sum = 0

    // map the prefix sum
    const indexMap = new Map()

    for(let i=0;i<n;i++){
        sum+=arr[i]
        if(sum === 0){
            maxLen = i+1
        }
        // otherwise check if this sum was seen before
        else{
            if(indexMap.has(sum)){
                maxLen = Math.max(maxLen,i-indexMap.get(sum))
            }else{
                indexMap.set(sum,i)
            }
        }
    }
    return maxLen;
}
console.log(longestSubArrayWithZeroSum([9, -3, 3, -1, 6, -5]))
