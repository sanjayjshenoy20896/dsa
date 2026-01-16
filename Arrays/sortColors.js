// sort colors
// have all 0's together, 1's together and 2's together


//complexity analysis-> TIME -> 0(NlOGN) SPACE: 0(1)
function sortColorsBuildtIn(arr){
    return arr.sort((a,b)=> a-b)
}

// dutch national flag
function sortColorsDutchNationalFlagAlgo(arr){
    let low=0;
    let high=arr.length -1;
    let mid =0 
    if(mid<=high){
        if(arr[mid] ==0){
            [arr[low],arr[mid]] = [arr[mid],arr[low]]
            low++;
            mid++;
        }else if(arr[mid] ==1){
            mid++
        }else{
            [arr[mid],arr[high]] = [arr[high],arr[mid]];
            high--
        }
    }
    return arr;
}


//using counting algo
function sortColorsUsingCountingAlgorithm(arr){
    let onesCount = 0;
    let zerosCount =0;
    let twosCount = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] ==0){
            zerosCount++
        }else if(arr[i] ==1){
            onesCount++
        }else{
            twosCount
        }
    }
    for(let i=0;i<=zerosCount;i++){
        arr[i] = 0
    }
    for(let i=zerosCount;i<zerosCount+onesCount;i++){
        arr[i] =1
    }
    for(let i = zerosCount+onesCount;i<arr.length;i++){
        arr[i] = 2
    }
    return arr;
}
console.log(sortColorsBuildtIn([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]))
console.log(sortColorsDutchNationalFlagAlgo([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]))
console.log(sortColorsUsingCountingAlgorithm([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]))