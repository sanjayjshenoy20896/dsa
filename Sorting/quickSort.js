/**
 * 
 * Quick sort
 * QuickSort is a sorting algorithm based on the Divide and Conquer that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.
 * 
 * We select the last element of the array as the pivot element.
 * 
 * [-6,20,8,-2,4] 
 */

function quickSort(arr){
 if(arr.length<2){
    return arr;
 }
 let pivot =arr[arr.length -1];
 let left = [];
 let right = [];

 for(let i=0;i<arr.length-1;i++){
    if(arr[i]< pivot){
        left.push(arr[i])
    }else{
        right.push(arr[i])
    }
 }

 return [...quickSort(left),pivot,...quickSort(right)]
}

const input = [-6,20,8,-2,4];
const output = quickSort(input);

console.log(output);

/***
 * input = [-6,20,8,-2,4];
 * pivot =4;
 * left = [-6,-2];
 * right = [20,8];
 * 
 * left:
 * [-6,-2]
 * pivot = -2;
 * left = [-6];
 * right= [];
 * op = [-6,-2];
 * 
 * right:[20,8];
 * pivot: 8;
 * left arr: [];
 * right arr: [20]
 * op:[8,20]
 * 
 * [-6,-2,4,8,20]
 * 
 * time complexity: between O(N^2) and  O(n * logn)
 * Worst case -> O(N^2);
 * Average case -> O
 * 
 */