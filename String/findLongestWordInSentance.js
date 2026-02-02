function findLongestWord(str){
  let stringArr = str.split(" ");
  let count = 0;
  let result = "";
  for(let word of stringArr){
    if(word.length >count){
      count = word.length;
      result= word;
    }
  }
  return result;
}
const string = "World is always about javascript language";
console.log(findLongestWord(string));

//Complexity	Value
//Time Complexity	O(n)
//Space Complexity	O(n)

function findLongestWordUsingReduce(str) {
  return str.split(" ").reduce((longestWord, currentWord) =>
    currentWord.length > longestWord.length ? currentWord : longestWord, "");
}

// const string = "World is always about javascript language";
console.log(findLongestWord(string));