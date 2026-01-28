function merge2ArraysInPlace(arr1,arr1Len,arr2,arr2Len){
    let i = arr1Len -1; // last index of arr1
    let j = arr2Len -1; // last index of arr2   
    let k = arr1Len + arr2Len -1; // last index of merged array

    while(i>=0 && j>=0){
        if(arr1[i]>arr2[j]){
            arr1[k] = arr1[i];
            i--;
            k--;
        }else{
            arr1[k] = arr2[j];
            j--;
            k--;
        }
    }
    while(j>=0){
        arr1[k] = arr2[j];
        j--;
        k--;
    }
    return arr1;
}
// console.log(merge2ArraysInPlace([1,3,5,0,0,0],3,[2,4,6],3)); // [1,2,3,4,5,6]


// merge 2 arrays in place without extra space
function mergeSortedArraysInPlaceWithoutExtraSpace(arr1,arr2){
    let i = arr1.length-1;
    let j= arr2.length-1;
    let k = arr1.length + arr2.length -1;
    arr1.push(...new Array(arr2.length).fill(0))
    while(i>=0 && j>=0){
        if(arr1[i]>arr2[j]){
            arr1[k] = arr1[i]
            i--;
        }else{
            arr1[k] = arr2[j];
            j--;
        }
        k--;
    }
    while(j>=0){
        arr1[k] = arr2[j];
        j--;
        k--
    }
    return arr1;
}
console.log(mergeSortedArraysInPlaceWithoutExtraSpace([1,4,7,8,10],[2,3,9])); // [1,2,3,4,7,8,9,10]