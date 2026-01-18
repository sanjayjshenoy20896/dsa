// Problem Statement: Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].


// bruteforce
//complexity analysis: Time O(N2) SPACE O(1)
function arrayReversePairs(arr){
    const n = arr.length;
    let count =0;
    let pairs = [];
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i] > 2*arr[j]){
                count++;
                pairs.push([arr[i],arr[j]])
            }
        }
    }
    return {count,pairs}
}
console.log(arrayReversePairs([1,3,2,3,1]))