/**
 * Given an integer k and a string s, any character in the string can be selected and changed to any other uppercase English character. This operation can be performed up to k times. After completing these steps, return the length of the longest substring that contains the same letter.
 * 
 */

function longestCharacterReplacement(s,k){
    const n = s.length;
    let left = 0;
    let maxLen = 0;
    let maxFreq = 0;
    const charCountMap = new Map();
    for(let right = 0;right<n;right++){
        const ch = s[right];
        
        // Update max frequency in window
        charCountMap.set(ch,(charCountMap.get(ch) || 0) + 1);
        maxFreq = Math.max(maxFreq,charCountMap.get(ch));
        const len = right-left+1
        // if the window is invalid shrink from left
        while(len - maxFreq>k){
            freq[s[left]]--
            left++;
        }
        maxLen = Math.max(maxLen,len);
    }
    return maxLen;
}

console.log("longestCharacterReplacement");
console.log(longestCharacterReplacement("ABAB",2)); // 4
console.log(longestCharacterReplacement("AABABBA",1)); // 4