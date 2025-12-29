// lower bound binary search implementation
// The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.
function lowerBoundBruteforce(arr,key){
    let arrLen = arr.length;
    for(let i=0;i<arrLen;i++){
        if(arr[i]>=key){
            return i
        }
    }
    return arrLen
}
// console.log(lowerBoundBruteforce([1,2,4,5,6],3)); //2

function lowerBoundOptimal(arr,key){
    let low = 0;
    let end = arr.length - 1;
    let ans = arr.length;
    while(low <=end){
        let mid = Math.floor((low + end)/2);
        if(arr[mid] >= key){
            ans = mid;
            end = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return ans
}
// console.log(lowerBoundOptimal([1,2,4,5,6],3)); //2


// upper bound binary search implementation

// The upper bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than the given key i.e. x.

function upperBoundBruteforce(arr,key){
    let arrLen = arr.length;
    for(let i=0;i<arrLen;i++){
        if(arr[i]>key){
            return i
        }
    }
    return arrLen;
}

function upperBoundOptimal(arr,key){
    let low = 0;
    let end = arr.length - 1;
    let ans = arr.length;
    while(low <=end){
        let mid = Math.floor((low + end)/2);
        if(arr[mid] > key){
            ans = mid;
            end = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return ans
}
// console.log(upperBoundBruteforce([1,2,4,5,6],3)); //2
// console.log(upperBoundOptimal([1,2,4,5,6],3)); //2

//search insert position in a sorted array
function findIndexPositionOfInsertKey(arr,key){
    let arrLen = arr.length;
    let left = 0;
    let right = arrLen - 1;
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        if(arr[mid] >= key){
            right = mid - 1;
            return mid
        }else{
            low  = mid + 1
        }
    }
    return arrLen
}
// console.log(findIndexPositionOfInsertKey([1,3,5,6],5)); //2

function findIndexPositionOfInsertKeyBruteForce(arr,key){
    let arrLen = arr.length;
    for(let i=0;i<arrLen;i++){
        if(arr[i]>=key){
            return i
        }
    }
    return arrLen
}
// console.log(findIndexPositionOfInsertKeyBruteForce([1,3,5,6],5)); //2

// find the floor and ceil of a given number in a sortedarray
function findCeil(arr,key){
    let arrLen = arr.length;
    let left = 0;
    let right  = arrLen - 1;
    let ceil = -1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] >= key){
            ceil = arr[mid];
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return ceil
}

function findFloor(arr,key){
    let arrLen = arr.length;
    let left = 0;
    let right  = arrLen - 1;
    let floor = -1; 
    while(left >= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] <= key){
            floor = arr[mid];
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return floor;
}

function findFloorAndCeil(arr,key){
    return {
        floor:findFloor(arr,key),
        ceil:findCeil(arr,key)
    }
}
// console.log(findFloorAndCeil([1,2,4,5,6],3)); //{floor:2,ceil:4}


// find the last occurance of a number in a sorted array:
function findLastOccurance(arr,key){
    let arrLen = arr.length;
    let res = -1;
    for(let i=0;i<arrLen;i++){
        if(arr[i] === key){
            res =i;
        }
    }
    return res;
}
// console.log(findLastOccurance([1,2,2,2,3,4,5],2)); //3

// find number of occurance of a number in a sorted array;
function findNumberofOccuranceOfKey(arr,key){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === key){
            count++;
        }
    }
    return count;
}
// console.log(findNumberofOccuranceOfKey([1,2,2,2,3,4,5],2)); //3


// search in rotated sorted array
// bruteforce -> linear search for a key
function searchInRotatedSortedArray(arr,key){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        if(arr[mid] === key){
          return mid;
        }else if(arr[mid] < key){
            left = mid +1;
        }else{
            right = mid -1;
        }
    }
}

// console.log(searchInRotatedSortedArray([4,5,6,7,0,1,2],0)); //4