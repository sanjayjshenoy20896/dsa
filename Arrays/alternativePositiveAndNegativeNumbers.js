// alternatively arrange +ve and -ve numbers
function alternatePositiveAndNegativeNumbers(arr){
  let positiveArr = [];
  let negativeArr = [];
  let arrLen = arr.length;
  for(let i=0;i<arr.length;i++){
    if(arr[i] >=0){
      positiveArr.push(arr[i])
    }else{
      negativeArr.push(arr[i])
    }
  }
  for(let i=0;i<Math.floor(arrLen/2);i++){
   arr[2*i] = positiveArr[i]
   arr[2*i + 1] = negativeArr[i] 
  }
  return arr;
}
// time complexity -> O(N + N/2) space complexity ->O(N/2 + N/2);
// console.log(alternatePositiveAndNegativeNumbers([1,2,-4,-5]))

function alternatePositiveAndNegativeNumbersOptimalApproach(arr){
  const arrLen = arr.length;
  const positive = 0;
  const negative = 1;
  const ans = new Array(arrLen).fill(0);
  for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
      ans[negative] = arr[i];
      negative+=2;
    }else{
      ans[positive] = arr[i];
      positive+=2
    }
  }
  return ans
}
// time complexity -> O(N) Space complexity -> O(N)
console.log(alternatePositiveAndNegativeNumbersOptimalApproach([1,2,-4.-5]))