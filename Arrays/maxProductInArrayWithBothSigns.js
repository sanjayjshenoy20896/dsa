function maximumProductInArrayWithBothSigns(arr){
  if(arr.length ==0){
    return 0
  }
  let maxProd = arr[0];
  let minProd = arr[0];
  let result = arr[0];
  for(let i=1;i<arr.length;i++){
    const num = arr[i];
    if(num<0){
      [maxProd,minProd] = [minProd,maxProd]
    }
    maxProd = Math.max(maxProd,num*maxProd);
    minProd = Math.min(minProd,num*minProd);
    result = Math.max(result,maxProd);
  }
  return result;
}
const input1 = [2,3,-2,4,-1];
console.log(maximumProductInArrayWithBothSigns(input1))