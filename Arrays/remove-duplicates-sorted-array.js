// remove duplicates from sorted array;

function removeDuplicatesFromSortedArray(arr){
    let numSet = new Set();
    for(let i=0;i<arr.length;i++){
        if(numSet.has(arr[i])){
            arr.splice(i,1);
            i--
        }
        numSet.add(arr[i])
    }
    return arr;
}
console.log(removeDuplicatesFromSortedArray([2,2,2,2]))
console.log(removeDuplicatesFromSortedArray([1,2,2,3,4]))


