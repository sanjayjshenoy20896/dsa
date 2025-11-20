/***
 * Insertion Sort
 * Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.
 * [-6,20,8,-2,4] 
 * 
 * Virtually sort into sorted array and unsorted array
 */


function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let insertNumber = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > insertNumber){
            arr[j+1] = arr[j];
            j-=1
        }
        arr[j+1] = insertNumber;
    }
    return arr
}

const input  = [-6,20,8,-2,4];
const output = insertionSort(input);
console.log(output)

/***
 * 
 * 
 * 
 * 
 * time compelxity -> O(N^2) -> quadratic complexity 
 * space complexity -> O(1) -> 
 */
