// string reversal using built in function
// complexity analysis: Time complexity -> O(N) Space complexity -> O(1)
function stringReverseUsingBuiltIn(string){
    return string.split("").reverse().join("")
}

console.log("stringReverseUsingBuiltIn");
console.log(stringReverseUsingBuiltIn("mad"))

// string reversal using backward traversal
//complexity analysis: Time complexity -> O(N) Space complexity -> O(1)
function stringReversalUsingIteration(string){
    let reversedString = [];
    for(let i=string.length-1;i>=0;i--){
        reversedString.push(string[i])
    }
    return reversedString.join("")
}
console.log("stringReversalUsingIteration");
console.log(stringReversalUsingIteration("mad"))


