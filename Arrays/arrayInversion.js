// array inversion

// for a sorted array it is always 0
// for a reverse sorted array it is n(n-1)/2 number of inversions
//complexity analysis: time -> O(n2) space: o(1)
function arrayInversion(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                count++
            }
        }
    }
    return count;
}

console.log(arrayInversion([1,2,3,4]))
console.log(arrayInversion([5,4,3,2,1]))
