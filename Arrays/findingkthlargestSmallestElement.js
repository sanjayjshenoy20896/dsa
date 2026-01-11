// find the kth largest element
// time complexity: O(n logn) space complexity: O(N)
function findKthLargestElementBySortingTheArray(arr,k){
  arr.sort((a,b)=> b-a);
  return arr[k - 1];
}

console.log(findKthLargestElementBySortingTheArray([1,2,3,4],2));
console.log(findKthLargestElementBySortingTheArray([1,15,17,9,12,2],2))

// find the kth largest element by removing duplicates and sorting the array
function findKthLargestElementBySortingTheArrayAndRemovingDuplicates(arr,k){
  let inputArr = [... new Set(arr)]
  inputArr.sort((a,b)=> b-a);
  return arr[k-1];
}

console.log(findKthLargestElementBySortingTheArrayAndRemovingDuplicates([1,15,17,9,12,2,12],2));

// find the kth largest element by using the priority queue
// time complexity -> O(N * LOG K) space complexity -> O(K)
function findKthLargestElementByUsingPriorityQueue(arr,k){
   // Min heap to store K largest elements
  let priorityQueue = [];
  arr.forEach((number)=>{
    priorityQueue.push(number);
    priorityQueue.sort((a,b)=> a-b);
    if(priorityQueue.length>k){
      priorityQueue.shift()
    }
  })
  return priorityQueue[0];
}
console.log(findKthLargestElementByUsingPriorityQueue([1,15,17,9,12,2,2,2,2],2))


// finding the kth smallest element by sorting the array
function findKthSmallestElementBySortingArray(arr,k){
  arr.sort((a,b)=> a-b);
  return arr[k-1]
}
console.log(findKthSmallestElementBySortingArray([1,15,17,9,12,2],2))

// finding the kth smallest element by sorting the array and removing duplicates
function findKthSmallestElementBySortingArrayAndRemovingDuplicates(arr,k){
  let inputArr = [...new Set(arr.sort((a,b)=> a-b))];
  return inputArr[k-1];
}
console.log(findKthSmallestElementBySortingArrayAndRemovingDuplicates([1,15,17,9,12,2,2],2))


// find the kth smalles element by using priority queue
// time complexity -> O(N * LOG K) space complexity -> O(K)
function findKthSmallestElementByUsingPriorityQueue(arr,k){
  let pq = [];
  arr.forEach((number)=>{
    pq.push(number);
    pq.sort((a,b)=>b-a);
    if(pq.length >k){
      pq.shift()
    }
  })
  return pq[0];  
}
console.log(findKthSmallestElementByUsingPriorityQueue([1,15,17,9,12,2],2))
