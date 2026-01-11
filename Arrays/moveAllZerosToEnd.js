
function moveZeroToTheEnd(arr){
    let nonZeroPointer= 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[nonZeroPointer++] = arr[i];
        }
    }
    console.log(nonZeroPointer)
    while (nonZeroPointer < arr.length)
        arr[nonZeroPointer++] = 0;
    return arr;
}
console.log("moveZeroToTheEnd");
console.log(moveZeroToTheEnd([1,2,0,0,0,5,0]));