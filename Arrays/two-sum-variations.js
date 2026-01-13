// find  a pair of numbers that whose sum matches a target value;
function findPairsThatResolvesToNumber(arr,target){
  let results = [];
  for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
      const sum = arr[i] + arr[j];
      // console.log(sum);
      if(sum === target){
        results.push([arr[i],arr[j]])
      }
    }
  }
  return results;
}
console.log("findPairsThatResolvesToNumber -> bruteforce")
console.log(findPairsThatResolvesToNumber([1,2,3,4,5,6,7,8,9],10));

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
console.log("findPairsThatResolvesToNumber1 -> optimised flow")
console.log(findPairsThatResolvesToNumber1([1,2,3,4,5,6,7,8,9],10));

function checkIfPairExistsThatMatchesTargetSum(arr,k){
    let set = new Set();
    for(let num of arr){
        let complement = k-num;
        if(set.has(complement)){
            return true;
        }
        set.add(num)
    }
    return false;
}

console.log("checkIfPairExistsThatMatchedTargetSum -> optimised approach");
console.log(checkIfPairExistsThatMatchesTargetSum([1,2,3,4,5,6,7,8,9],10))


// return index of the pair that match the target sum from input array
function findIndexThatMatchesTargetSum(arr,target){
  const map = new Map(); // Map to store element -> index
  for(let i=0;i<arr.length;i++){
    let complement = target - arr[i];
    if(map.has(complement)){
      return [map.get(complement),i]
    }
    map.set(arr[i],i)
  }
  return [-1,-1]
}
console.log(findIndexThatMatchesTargetSum([1,2,3,4,5,6,7,8,9],10))
