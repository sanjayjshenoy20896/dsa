/***
 * Check if array contains duplicates
 */


function doesArrayContainDuplicates(arr){
    let isDuplicate = false;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] == arr[j]){
                isDuplicate = true
            }
        }
    }
    return isDuplicate;
}
// time complexity -> 0(N2) Space complexity -> O(1)
// console.log(doesArrayContainDuplicates([1,2,3,4,1]));
// console.log(doesArrayContainDuplicates([1,2,3]))

function doesArrayContainDuplicatesBetterApproach(arr){
    arr.sort((a,b)=>a-b);
    let isDuplicate = false;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == arr[i-1]){
            isDuplicate = true
        }
    }
    return isDuplicate
}
// complexity analysis -> Time complexity -> O(n log n) Space complexity -> O(1)
// console.log(doesArrayContainDuplicatesBetterApproach([1,2,3,4,1]));
// console.log(doesArrayContainDuplicatesBetterApproach([1,2,3,4]))

function doesArrayContainDuplicatesOptimalApproach(arr){
    const uniqueElements = new Set(arr);
    return uniqueElements.size < arr.length;
} 
// complexity analysis -> Time complexity and space compelexity -> O(N)
// console.log(doesArrayContainDuplicatesOptimalApproach([1,2,3,4,2]));
// console.log(doesArrayContainDuplicatesOptimalApproach([1,2,3,4]))