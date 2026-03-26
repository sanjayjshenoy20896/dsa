// for all positve array elements
function maximumProductInArray(arr){
  let maximumProduct = -Infinity;
  let product = 1;
  for(let i=0;i<arr.length;i++){
    product *=arr[i];
    maximumProduct = Math.max(maximumProduct,product);
  }
  return maximumProduct
}

const input = [2,3,2,4];
const output = maximumProductInArray(input);