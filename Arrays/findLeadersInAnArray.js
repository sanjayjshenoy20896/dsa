// leaders in a array

//bruteforce method:
function  findANumberLeadersInArrayBruteforce(arr){
  let ans = [];
  for(let i=0;i<arr.length;i++){
    let leader = true;
    for(let j=i+1;j<arr.length;j++){  
      if(arr[j] >= arr[i]){
        leader = false;
        break;
      }
    }
    if(leader){
      ans.push(arr[i])
    }
  }
  return ans;
}
// time complexity -> O(N2) Space complexity -> O(1)
// console.log(findANumberLeadersInArrayBruteforce([1, 2, 5, 3, 1, 2]))

//optimal solution
function findANumberLeadersInArrayOptimal(arr){
  let ans = [];
  let max = arr[arr.length - 1];
  ans.push(arr[arr.length-1]);
  for(let i=arr.length-2;i>=0;i--){
    if(arr[i] > max){
      ans.push(arr[i]);
      max = arr[i]
    }
  }
  return ans.reverse();
}
// time complexity -> O(n) space complexity -> O(1)
// console.log(findANumberLeadersInArrayOptimal([1,2,5,3,1,2]));