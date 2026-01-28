/**
 *  Given a valid parentheses string s, return the nesting depth of s. 
 * The nesting depth is the maximum number of nested parentheses.
 */
// complexity analysis Time: O(n) Space: O(1)
function maximumNestingDepthOfParentheis(s) {
    let currentDepth = 0;
    let maxDepth = 0;
    for(let char of s){
        if(char === '('){
            currentDepth++;
        }else if(char === ')'){
            currentDepth--;
        }
        maxDepth = Math.max(maxDepth,currentDepth);
    }
    return maxDepth;
}
console.log("maximumNestingDepthOfParentheis");
console.log(maximumNestingDepthOfParentheis("(1+(2*3)+((8)/4))+1")); // 3
console.log(maximumNestingDepthOfParentheis("(1)+((2))+(((3)))"));