// Minimize the maximum difference between the heights

// bruteforce:
function getMinDiff(arr,k){
    arr.sort((a,b)=>a-b);
    const n = arr.length;
    let res = arr[n-1] - arr[0];
    
    // For all indices i, increment arr[0...i-1] 
    // by k and decrement arr[i...n-1] by k
    for(let i=1;i<n;i++){
        if(arr[i]-k <0){
            continue;
        }
        let minH = Math.min(arr[0] + k, arr[i] - k);

        let maxH = Math.max(arr[i - 1] + k, arr[n - 1] - k);
        res = Math.min(res, maxH - minH);
    }
    return res;
}
console.log(getMinDiff([1, 5, 8, 10],2))