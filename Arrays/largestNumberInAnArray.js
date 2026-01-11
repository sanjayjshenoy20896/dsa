// optimised flow
function findPairsThatResolvesToNumber1(arr,target){
  let results = [];
  const seenNumbers = new Set();
  for(const num of arr){
    const complement = target - num;
    if(seenNumbers.has(complement)){
      results.push([num,complement])
    }
    seenNumbers.add(num)
  }
  return results;
}
// console.log(findPairsThatResolvesToNumber1([1,2,3,4,5,6,7,8,9],10));

// find Largest element in an array
function findLargestElement(arr){
  const sortedArray = arr.sort((a,b)=>a-b);
  return sortedArray[sortedArray.length - 1];
}

// console.log(findLargestElement([3,5,7,2,8,1,4]));
// complexity: O(nlogn) due to sorting


// optimised flow to find largest element in an array -> Complexity: O(n)
function findLargestElement1(arr){
  let  max = arr[0];
  for(let i=1;i<arr.length;i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max;
}
// console.log(findLargestElement1([3,5,7,2,8,1,4]));
