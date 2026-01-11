// Find the first non-repeating character from a stream of characters
// bruteforce
//Using Nested Loop - O(n2) time and O(n) space
function findFirstNonRepeatingChar(string){
    let charMap = new Map();
    for(let char of string){
        charMap.set(char,(charMap.get(char) || 0) +1)
    }
    for(let [key,value] of charMap.entries()){
        if(value ===1){
            return key
        }
    }
    return "#"
}

console.log("findFirstNonRepeatingChar");
console.log(findFirstNonRepeatingChar("aabc"))