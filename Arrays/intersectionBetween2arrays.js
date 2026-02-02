function findIntersectionOF2Arrays(arr1,arr2){
  const set1 = new Set(arr1);
  const commonElements = [];
  for(let num of arr2){
    if(set1.has(num)){
      commonElements.push(num) 
    }
  }
  return commonElements;
}
const array1 = [1,2,3,4];
const array2 = [2,3,4,5];
console.log(findIntersectionOF2Arrays(array1,array2))
//Overall time complexity: O(n + m)

//Overall space complexity: O(n + k), where k is the number of common elements.