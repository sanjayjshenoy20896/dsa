// left rotate by N places
function leftRotateByNPlaces(arr,n){
  const k = arr.length;
  const rotations = n%k;
  const rotatedPart = arr.slice(0,rotations);
  const remainingPart = arr.slice(rotations);
  return [...remainingPart,...rotatedPart];
}
// console.log(leftRotateByNPlaces([1,2,3,4],1));
// 2341

function rightRotateByNPlaces(arr,n){
  const k = arr.length;
  const rotations = n%k;
  const rotatedPart = arr.slice(k-rotations); 
  const remainingPart = arr.slice(0,k-rotations); 
  return [...rotatedPart,...remainingPart]
}
// console.log(rightRotateByNPlaces([1,2,3,4],1));
//4123

