//Product of Array except self
// complexity analysis time-> O(N) Space  -> O(n)
function productOFArrayExceptSelf(arr){
    let n = arr.length;
    let suffix = Array(n).fill(1);
    let prefix = Array(n).fill(1);
    let result = Array(n).fill(1);
    if(arr.length ===2){
        return arr.reverse()
    }
    //prefix product
    for(let i=1;i<n;i++){
        prefix[i] = prefix[i-1]*arr[i-1];
    }
    // suffix product
    for(let i=n-2;i>=0;i--){
        suffix[i] = arr[i+1] * suffix[i+1]
    }

    for(let i=0;i<n;i++){
        result[i] = prefix[i] * suffix[i]
    }
    return result;
}
console.log(productOFArrayExceptSelf([1,2,3,4,5]))
console.log(productOFArrayExceptSelf([0,12]))


// bruteforce
function productOFArrayExceptSelfBruteforce(arr){
    const n = arr.length;
    let result = Array(n).fill(1);
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i!=j){
                result[i] *= arr[j];
            }
        }
    }
    return result;
}
console.log(productOFArrayExceptSelfBruteforce([1,2,3,4,5]));
console.log(productOFArrayExceptSelfBruteforce([0,12]))
