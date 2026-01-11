
// bruteforce algorithm:
function findPeakElementBruteforce(arr){
    for(let i=0;i<arr.length;i++){
        const left = (i===0) || (arr[i] >= arr[i-1]);
        const right  =(i=== arr.length -1) || (arr[i]>= arr[i+1]);
        if(left && right ){
            return i
        }
    }
    return -1;
}
console.log(findPeakElementBruteforce([1, 2, 1, 3, 5, 6, 4]))

// better approach:
function findPeakElement(arr){
    let low = 0;
    let high = arr.length -1;
    while(low < high){
        let mid = Math.floor((low + high) / 2);
        if(arr[mid]<arr[mid+1]){
            high = mid
        }else{
            low  = mid+1
        }
    }
    return {value:arr[low],index:low};
}

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));