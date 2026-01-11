// find  a pair of numbers that whose sum matches a target value;
function findPairsThatResolvesToNumber(arr,target){
  let results = [];
  for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
      const sum = arr[i] + arr[j];
      // console.log(sum);
      if(sum === 10){
        results.push([arr[i],arr[j]])
      }
    }
  }
  return results;
}
// console.log(findPairsThatResolvesToNumber([1,2,3,4,5,6,7,8,9],10));

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