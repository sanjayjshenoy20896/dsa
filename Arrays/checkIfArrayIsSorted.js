// check if array is sorted:
// complexity analysis
function checkIfArrayIsSorted(arr){
    if(arr.length ==1){
        return true
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] >arr[i+1]){
            return false
        }
    }
    return true
}
console.log(checkIfArrayIsSorted([1,2,3,4])); // true
console.log(checkIfArrayIsSorted([4,3,2,1])); // false