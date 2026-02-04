//  Rearrange the array in-place so that all occurrences of 1 come first, followed by 2, and then 3, without using library sorting methods.
 
// 1. Mixed values
 
// Input:
 
// [2, 1, 3, 2, 1, 3] 
 
// Output:
 
// [1, 1, 2, 2, 3, 3]
 
// 2. Already sorted
 
// Input:
 
// [1, 1, 2, 2, 3, 3]
 
 
// Output:
 
// [1, 1, 2, 2, 3, 3]
 
// 3. Reverse order
 
// Input:
 
// [3, 3, 2, 2, 1, 1]
 
 
// Output:
 
// [1, 1, 2, 2, 3, 3]
const input =  [3, 3, 2, 2, 1, 1]


function sortArrayByOccurance(arr){
  const n = arr.length;
  let ones = 0;
  let twos = 0;
  let threes = 0;
  for(let i=0;i<n;i++){
    if(arr[i] === 1){
      ones++
    }else if(arr[i] === 2){
      twos++
    }else{
      threes++
    }
  }
  for(let a=0;a<ones;a++){
    arr[a] = 1
  }
  for(let b=ones;b<ones+twos;b++){
    arr[b] =2
  }
  
  for(let c=ones+twos;c<n;c++){
    arr[c] =3
  }
  
  return arr;
  
}
console.log(sortArrayByOccurance(input));

function sortArrayByTwoPointers(arr){
  let low = 0;
  let mid = 0;
  let high = arr.length -1;
  
  while(mid<=high){
    if(arr[mid] == 1){
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    }else if(arr[mid] ==3){
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }else{
      mid++;
    }
  }
  return arr;
}
console.log(sortArrayByTwoPointers(input));