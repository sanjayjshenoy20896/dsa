// merge sort
/**
 * Merge sort
 * 
 * Merge sort is a sorting algorithm that follows the divide and conquer paradigm. It works by recursively breaking down an array into smaller subarrays until each subarray contains only one element (which is inherently sorted). Then, these single-element subarrays are merged back together in a sorted manner.
 * const input = [2,4,1,3,5,9,8]
 * 
 */





function performMergeSort(arr){
    if (arr.length <= 1) {
        return arr;
    }
    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort the two halves
    const sortedLeft = performMergeSort(left);
    const sortedRight = performMergeSort(right);

    // Merge the sorted halves
    return performMerge(sortedLeft, sortedRight);
}

function performMerge(left,right){
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    // Compare elements from both arrays and add the smaller one to resultArray
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;   
        }
    }

    // Concatenate any remaining elements from either array
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const input = [-6,20,8,-2,4]
const output = performMergeSort(input);
console.log(output);

/***
 * [-6,20] [-2,4,8] =>[]
 * 
 * [-6]< [20]  [-2,4,8] => [20] [-2,4,8] -> [-6]
 * 
 * [20] [4,8]=> [-6,-2]
 * 
 * [20] [8] => [-6,-2,4]
 * 
 * => [-6,-2,4,8,20]
 */

