// check if array is sorted or rotated
function checkIfArrayIsSortedOrRotated(arr){
    // count number of times the sequence breaks
    let count = 0;
    const n  = arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]>arr[(i+1)%n]){
            count++;
        }
    }
return count<=1;
}
const arr = [ 3, 4, 5, 1, 2 ];
const arr1 = [1,2,3,4];
console.log(checkIfArrayIsSortedOrRotated(arr)); // true 