/***
 * Heap sort
 * 
 * Heap -> Ordered binary tree
 * maxHeap -> parent > child
 * build max heap -> created a max heap from unsorted array
 * heapify -> similiar to max heap but assumes part of the heap is already sorted
 * 
 * [2,8,5,3,9,1]
 */


const input = [-6,20,8,-2,4]

function heapSort(arr) {
  let n = arr.length;

  // Build max-heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]]; // ES6 destructuring for swap

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
  return arr;
}

// To heapify a subtree rooted with node i which is an index in arr[]
// n is size of heap
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // left child
  let right = 2 * i + 2; // right child

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Example usage:
const unsortedArray = [3, 0, 2, 5, -1, 4, 1];
const sortedArray = heapSort(unsortedArray);
console.log(sortedArray); // Output: [-1, 0, 1, 2, 3, 4, 5]