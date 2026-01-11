function findRemainingElementAfterRemovingMaxAndMin(arr){
    let n = arr.length;
    if(n ==1){
        return arr[0]
    }
    let x = Math.floor((n-1)/2);
    arr.sort((a,b)=>a-b);
    return arr[x]
}
console.log(findRemainingElementAfterRemovingMaxAndMin([1,5,4,2]))