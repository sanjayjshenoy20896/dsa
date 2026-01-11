function findSinglePersonInGroupOfCouples(arr){
    let freq = new Map();
    for(let i=0;i<arr.length;i++){
        freq.set(arr[i],(freq.get(arr[i]) || 0) +1);
    }
    for(let [key,value] of freq.entries()){
        if(value == 1){
            return key
        }
    }
    return -1
}
console.log(findSinglePersonInGroupOfCouples([1,2,3,2,1]));

function findSinglePersonIngroupOfCouples(arr){
    let res= 0;
    for(let i=0;i<arr.length;i++){
        res^= arr[i]
    }
    return res;
}
console.log(findSinglePersonInGroupOfCouples([1,2,3,2,1,]))
