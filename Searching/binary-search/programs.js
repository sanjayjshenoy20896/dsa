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
    while(left <= right){
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

function findLastOccuranceUsingBS(arr,key){
    let left = 0;
    let right = arr.length - 1;
    let result =-1;
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        if(arr[mid] === key){
            result = mid;
            left = mid + 1; // Continue searching in the right half
        }else if(arr[mid] < key){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return result;
}
// console.log(findLastOccuranceUsingBS([1,2,2,2,3,4,5],2)); //3
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


// Search in rotated array
// bruteforce algorithm -> linear search for a key
// binary search algorithm
function searchkeyInRotatedArray(nums,target){
    let low = 0;
    let high = nums.length -1;

    while(low<=high){
        const mid = Math.floor((low+high)/2);

        // if target found in mid
        if(nums[mid] === target){
            return mid
        }

        // if left part is sorted
        if(nums[low] < nums[high]){
            if(nums[low] <= target && target<nums[mid]){
                high = mid-1
            }else{
                low = mid +1
            }
        }else{
            if(nums[mid] < target && target<=nums[high]){
                low = mid+1;
            }else{
                high = mid-1
            }
        }
    }
    return -1;
}
// console.log(searchkeyInRotatedArray([7,8,1,2,3,4,5,6],5));

// search an element in a rotated array. The array may contain duplicates
function searchkeyInRotatedArrayWithDuplicates(arr,key){
    let low = 0;
    let high = arr.length -1;
    let index = false;
    while(low<=high){
        const mid = Math.floor((low+high)/2);
        if(arr[mid] === key) index = true
        if(arr[low]  === arr[mid] && arr[low] === arr[high]){
            low++;
            high--
        }
        if(arr[low] <= arr[mid]){
            if(arr[low] <= key && key<=arr[mid]){
                high = mid-1
            }else{
                low = mid+1
            }
        }else{
            if(arr[mid] <=key && key<= arr[high]){
                low = mid+1
            }else{
                high = mid -1;
            }
        }
    }
    return index;
}
// console.log(searchkeyInRotatedArrayWithDuplicates([7, 8, 1, 2, 3, 3, 3, 4, 5, 6],2));


// find minimum in a rotated sorted array
// bruteforce algorithm

function minimumValueInRotatedSortedArray(arr){
    let min = Infinity;
    for(let i=0;i<arr.length;i++){
        min = Math.min(min,arr[i]);
    }
    return min;
}

// console.log(minimumValueInRotatedSortedArray([7,8,9,1,2,3,4]))

function minimumValueInRotatedSortedArrayBS(arr){
    let low = 0;
    let high = arr.length -1;
    while(low<high){
        const mid = Math.floor(low + (high - low) / 2);
        if(arr[mid] >arr[high]){
            low  = mid +1
        }else{
            high = mid
        }
    }
    return arr[low]
}

// console.log(minimumValueInRotatedSortedArrayBS([7,8,9,1,2,3]))

// find number of times the array has been rotated

// Bruteforce algorithm -> Linear search algorithm
function numberOfRotationsInArray(arr){
    let arrLen = arr.length;
    for(let i=0;i<arrLen;i++){
        if(arr[i] > arr[i+1]){
            return i+1;
        }
    }
    return 0;
}
// console.log(numberOfRotationsInArray([7,8,9,1,2,3]));
function numberOfRotationsInArrayBS(arr){
    let low = 0;
    let high = arr.length -1;
    while(low<high){
        let mid = low + Math.floor((high-low)/2);
        // If mid element is greater than element at high,
        // smallest element lies to the right of mid
        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else {
            // Else smallest element is at mid or to the left
            high = mid;
        }
    }   
    return low; 
}
// console.log(numberOfRotationsInArrayBS([7,8,9,1,2,3,4]));

// single element in a sorted array -> find element that occurs only once;
// bruteforce approach -1
function findSingleElementOcuuranceInArray(arr){
    let arrLen = arr.length;
    // if the length of array is 1. return that element
    if(arrLen === 1) return arr[0];
    
    //If the current element is the first one, compare it with the next. If they are different, return it.

    for(let i=0;i<arrLen;i++){
        if(i === 0){
            if(arr[i] !== arr[i+1]){
                return arr[i]
            }
        }else if(i == arrLen -1){
            if(arr[i]!== arr[i-1]){
                return arr[i]
            }
        }else{
            if(arr[i] !== arr[i-1] && arr[i] !== arr[i+1]){
                return arr[i]
            }
        }
    }
    return -1;
}

// console.log(findSingleElementOcuuranceInArray([1,2,2,3,3,3,4,4,4]));

// bruteforce approach -2
function findSingleElementOccuranceInArrayUsingXor(arr){
    const arrLen = arr.length;
    let result = 0;
    for(let i=0;i<arrLen;i++){
        result^=arr[i]
    }
    return result;
}
// console.log(findSingleElementOccuranceInArrayUsingXor([1,2,2,3,3,4,4]))

// find the peak element in an array. current number must be greater than both the neighbours

function findPeakElement(arr){
    const arrLen = arr.length;
    for(let i=0;i<arrLen;i++){
        const left = (i ===0 || arr[i]>=arr[i-1]);
        const right = (i == arrLen-1 || arr[i]>= arr[i+1])
        if(left && right){
            return i;
        }
    }
    return -1
}
console.log(findPeakElement( [1, 3, 20, 4, 1, 0]))