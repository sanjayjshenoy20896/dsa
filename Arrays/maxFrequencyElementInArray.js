function maxFrequencyChar(str){
  let charMap = new Map();
  let count = 0;
  let element = -1;
  for(let char of str){
    if(char === " ") continue;
    charMap.set(char,(charMap.get(char) || 0)+1);
  }  
  if (charMap.size === 0) return -1;
  for(let [key,value] of charMap.entries()){
    if(value > count){
      element = key
      count = value
    }
  }
  return element
}

console.log(maxFrequencyChar("hello world"));
console.log(maxFrequencyChar("aabbcc"));
console.log(maxFrequencyChar(""))
console.log(maxFrequencyChar(" "))