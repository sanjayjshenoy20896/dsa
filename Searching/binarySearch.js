// time complextity -> o(Logn)
function performBinarySearch(array,key){
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        //calculate the midpoint of the array;
        let mid = Math.floor((start + end) / 2);
        // if the elemnt is present right in the middle, return the mid as the index;
        if (array[mid] === key) {
            return mid; // Return the index if found
            // if the array[mid] <key ,increase the start index by 1, continue the process to search in right half
        } else if (array[mid] < key) {
            start = mid + 1; // Search in the right half
            // if array[mid]>key, decrease the end value by 1, continue to search in left side
        } else {
            end = mid - 1; // Search in the left half
        }
    }
    return -1; // Return -1 if not found
}


const input = [1,2,3,4,5];
const output = performBinarySearch(input,11);
console.log(output);