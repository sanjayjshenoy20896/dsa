function tripletsThatAddUpToZeroBruteforce(arr){
    const arrLen = arr.length;
    const unique = new Set();

    for(let i=0;i<arrLen;i++){
        for(let j=i+1;j<arrLen;j++){
            for(let k = j+1;k<arrLen;k++){
                if(arr[i]+arr[j]+arr[k] === 0){
                    let temp = [arr[i],arr[j],arr[k]].sort((a,b)=> a-b);
                    unique.add(JSON.stringify(temp));
                }
            }
        }
    }
    // Convert set to array of arrays
    let ans = Array.from(unique).map(str => JSON.parse(str));
    return ans;
}

// console.log(tripletsThatAddUpToZeroBruteforce([-1,0,1,2,-1,-4]));
// Time Complexity: O(N2 * log(no. of unique triplets)),
// Space Complexity: O(2*N) + O(n)