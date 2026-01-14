// Length of longest substring with non repeating characters
function lengthofLongestSubstringWithNonRepatingCharsBruteforce(str){
    // compute the length of the string
    let length = str.length;

    // variable to store the maximum length
    let maxLen  = 0;

    // iterate to all possible strting points of the string;
    for(let i=0;i<length;i++){
        // create a hash substring window with 256 characters considering ascii
        let hash = new Array(256).fill(0);
        for(let j=i;j<length;j++){
            if(hash[str.charCodeAt(j)] === 1) break;
            hash[str.charCodeAt(j)] = 1;
            // compute the length
            let len = j - i +1;

            // find the longest length from above length and maxLength
            maxLen = Math.max(len,maxLen)
        }

    }
    return maxLen;
}
// Time complexity -> O(N2) space complexity -> O(1)
// console.log(lengthofLongestSubstringWithNonRepatingCharsBruteforce("cadbzabcd"));
console.log("lengthofLongestSubstringWithNonRepatingCharsBruteforce");
console.log(lengthofLongestSubstringWithNonRepatingCharsBruteforce("abcddabac"));

function lengthofLongestSubstringWithNonRepatingCharsOptimalAproach(str){
    //compute the length of the string 
    let n = str.length;

    // create a hashtable with 256 chars without ascii
    let hash = new Array(256).fill(-1);

    let l=0;
    let r=0;
    let maxLen = 0;
    while(r<n){
        /* If current character s[r] 
               is already in the substring */
        if(hash[str.charCodeAt(r)] != -1) {
             /* Move left pointer to the right
                   of the last occurrence of s[r] */
            l = Math.max(l,hash[str.charCodeAt(r)]+1);
        }
        // calculate the length of substring
        let len = r-l+1;
        
        // update the maxLength based on computed value
        maxLen = Math.max(len,maxLen)
         /* Store the index of the current
               character in the hash table */
        hash[str.charCodeAt(r)] = r;

        //move the right pointer
        r++
    }
    // console.log(str.slice(l,r))
    return {maxLen,string:str.slice(l,r)};
}
console.log("lengthofLongestSubstringWithNonRepatingCharsOptimalAproach")
console.log(lengthofLongestSubstringWithNonRepatingCharsOptimalAproach("cadbzabcd"));