function countVowelsInString(str){
  let vowels = new Set( ["a","e","i","o","u","A","E","I","O","U"])
  let count = 0
  for(let char of str){
    if(vowels.has(char)){
      count++
    }
  }
  return count;
}
console.log(countVowelsInString("apple"));

//Complexity	Value
//Time Complexity	O(n)
//Space Complexity	O(1)