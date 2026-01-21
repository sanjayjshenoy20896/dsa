// arrange wave array

// solution 1 sort the array and swap adjacent elemnts
// complexity Time: O(NLOGN) SPACE:O(1)
function arrangeWaveArray(arr){
    arr.sort((a,b)=> a-b);
    const n = arr.length;

    // trabverse and swap adjacent elements
    for(let i=0;i<n-1;i+=2){
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        // let temp = arr[i];
        // arr[i] = arr[i+1];
        // arr[i+1] = temp
    }
    return arr
}
console.log(arrangeWaveArray([1, 2, 3, 4, 5]));
// solution 2 -> single traversal
// complexity analysis: Space:O(1) Time: O(N)

function arrangeWaveArrayUsingTraversal(arr){
    let n = arr.length;
    for(let i=0;i<n;i+=2){
        if(i>0 && arr[i] < arr[i-1]){
            [arr[i-1],arr[i]] = [arr[i],arr[i-1]]
        }
        if(i<n-1 && arr[i]<arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        }
    }
    return arr;
}
console.log(arrangeWaveArrayUsingTraversal([1,2,3,4,5]))
