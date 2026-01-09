// sort characters by frequency
function sortCharactersByFrequency(str){
    const charFrequency = new Map();   
    for(let char of str){
        charFrequency.set(char,(charFrequency.get(char)| 0)+1)
    }
    const sortedCharacters = [...charFrequency.entries()].sort((a,b)=> b[1]-a[1]);
    let result ="";
    let results = []
    for(const [char,freq] of sortedCharacters){
        results.push({
            character:char,
            count:freq
        })
        result+=char.repeat(freq)
    }
    return {result,results};
}
// console.log(sortCharactersByFrequency("tree"))

function convertRomanToNumber(roman){
    //roman to number
    const romanMapping  = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let res = 0;
    // traverse from start to end of the string
    for(i=0;i<roman.length -1;i++){
        if(romanMapping[roman[i]] < romanMapping[roman[i+1]]){
            res-=roman[i]
        }else{
            res+=roman[i]
        }
    }
    return res +romanMapping[roman[roman.length -1]];
}

// console.log(convertRomanToNumber("V"))

// covert atoI
/*** Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
The algorithm for myAtoi(string s) is as follows:
1. Whitespace: Ignore any leading whitespace (" ").
2. Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
3. Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
4. Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
 */

function convertAtoI(str){
    let i=0;
    let sign = 1;
    let res = 0;

    // Skip leading whitespaces
    while(i<str.length && str[i] == " ") i++;

    // return 0 if only spaces
    if(i === str.length) return 0;

    // Check for optional '+' or '-' sign
    if(str[i] == "-"){
        sign = -1;
        i++;
    }else if(str[i] == "+"){
        i++;
    }

    // Convert characters to integer while valid digits
    while (i < str.length && str[i] >= '0' && str[i] <= '9') {
        res = res * 10 + (str[i].charCodeAt(0) - '0'.charCodeAt(0));

        // Clamp to 32-bit signed integer range
        if (sign * res > 2147483647) return 2147483647;
        if (sign * res < -2147483648) return -2147483648;

        i++;
    }
    return sign*res;
}

// console.log(convertAtoI("1337c0d3"));
// console.log(convertAtoI("   -42"));

// count number of substrings from a sequence of chars with k distinct chars -> incomplete
function atMostKDistinctString(s,k){
    let left = 0;
    let res = 0;
    const freq = new Map();
    // iterate with right pointer for a sliding window
    for(let right = 0;right<s.length;right++){
        freq.set(s[right],(freq.get(s[right] || 0) +1));

        // shrink the window if disctinct exceeds k
        while(freq.size>k){
            freq.set(s[left],freq.get(s[left]) -1);
            if(freq.get(s[left]) === 0) freq.delete(s[left]);
            left++;
        }
        res+=(right-left+1)

    }
    // return result
    return res;
}

function countNumberOfSubstrings(s,k){
    return atMostKDistinctString(s,k) - atMostKDistinctString(s,k-1);
}
// countNumberOfSubstrings("pqpqs",2);

// find the largest odd number
function findLargestOddNumber(numString){
    let ind = -1;

    // Find the last odd digit in the string
    let i;
    for(i=numString.length-1;i>=0;i--){
        if((numString[i] - '0')%2 ===1){
            ind  = i;
            break;
        }
    }
    // Skip leading zeroes up to the found odd digit
    i = 0;
    while (i <= ind && numString[i] === '0') i++;
    // Return the substring from first non-zero to the odd digit
    return numString.substring(i, ind + 1);
}
// console.log(findLargestOddNumber("504"))


/***
 * Check if 2 strings are anagrams to each other
 * 
 * Approach 1: Sorting and comparison
 * 
 * 1.) Normalise strings
 * a.) Convert both strings to handle case sensitivity
 * b.) Removing non-alphanumeric characters, spaces, or punctuation if they should be ignored
 * 
 * 2.) Sort characters
 * Split each normalized string into an array of characters, sort the array alphabetically, and then join it back into a string. This ensures that if the strings are anagrams, they will have the same sorted representation.
 * 
 * compare the 2 normalised string for quality for anagrams;
 */


function isStringsAnagramsToEachOther(str1,str2){
    let  status = false
    const normalisedString1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '').split("").sort().join("");
    const normalisedString2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '').split("").sort().join("");
    // console.log(normalisedString1);
    // console.log(normalisedString2);
    if(normalisedString1 === normalisedString2){
        status = true    
    }
    return status
}

const anagram = isStringsAnagramsToEachOther("Tom Marvolo Riddle","I am Lord Voldemort");
// console.log("anagram")
// console.log(anagram)


// grouped anagrams
function groupedAnagrams(strings){
    const map  = new Map();
    for(let string of strings){
        // create a sorted version of key
        const sortedKey = string.toLowerCase().split("").sort().join("");
        // check if the mapped key exits in the map
        if(map.has(sortedKey)){
            map.get(sortedKey).push(string)
        }else{
            map.set(sortedKey,[string])
        }
    }
    return Array.from(map.values())
}

// console.log(groupedAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

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
        if(hash[str.charCodeAt(r)] != -1) {
            l = Math.max(l,hash[str.charCodeAt(r)]+1);
        }
        // calculate the length of substring
        let len = r-l+1;
        
        // update the maxLength based on computed value
        maxLen = Math.max(len,maxLen)
        hash[str.charCodeAt(r)] = r;

        //move the right pointer
        r++
    }
    return maxLen;
}
// console.log(lengthofLongestSubstringWithNonRepatingCharsOptimalAproach("cadbzabcd"));

//longest repeating character replacement
// explanation
//Given an integer k and a string s, any character in the string can be selected and changed to any other uppercase English character. 
//This operation can be performed up to k times.
// After completing these steps, return the length of the longest substring that contains the same letter.




// find the first repeating character
function findTheFirstRepeatingCharacterInAString(string){
    let strLen = string.length;
    let strMap = new Map();
    for(let i=0;i<strLen;i++){
        if(strMap.get(string[i])){
            return string[i]
        }else{
            strMap.set(string[i],1);
        }
    }
}
console.log(findTheFirstRepeatingCharacterInAString("geeksforgeeks"));



//Given a string, find the repeated character present first in the string.
// bruteforce -> dual looping
function findCharacterRepeatFromLeftToRightBruteforce(string){
    for(let i=0;i<string.length;i++){
        for(let j=i+1;j<string.length;j++){
            if(string[i] === string[j]){
                return string[i]
            }
        }
    }
    return null;
}
console.log("bruteforce")
console.log(findCharacterRepeatFromLeftToRightBruteforce('abc'));
console.log(findCharacterRepeatFromLeftToRightBruteforce("sanjaysanjay"));
console.log(findCharacterRepeatFromLeftToRightBruteforce("geeksforgeeks"))

// without using builtin
function findCharacterRepeatFromLeftToRightBetter(string){
    const hash = Array(256).fill(0);
    const pos = Array(256).fill(0);
    let k;
    let p = -1;

    for(let i=0;i<string.length;i++){
        k = string[i].charCodeAt();
        if(hash[k]===0){
            hash[k]++;
            pos[k] = i
        }else if(hash[k] ===1){
            hash[k]++
        }
    }

    for(let i=0;i<256;i++){
        if(hash[i] === 2){
            if(p === -1){
                p =pos[i]
            }else if(p>pos[i]){
                p = pos[i]
            }
        }
    }
    return p===-1 ? null : string[p]
}
console.log("better")
console.log(findCharacterRepeatFromLeftToRightBetter("abc"));
console.log(findCharacterRepeatFromLeftToRightBetter("sanjaysanjay"));
console.log(findCharacterRepeatFromLeftToRightBetter("geeksforgeeks"));

function findCharacterRepeatFromLeftToRight(string){
    let charFreqMap = {};
    for(let str of string){
        if(charFreqMap[str]){
            charFreqMap[str]+=1
        }else{
            charFreqMap[str] = 1
        }
    }
    for(let str  of string){
        if(charFreqMap[str] > 1){
            return str
        }
    }

    return null
}
console.log("using builtin")
console.log(findCharacterRepeatFromLeftToRight("sbc"));
console.log(findCharacterRepeatFromLeftToRight("sanjaysanjay"))
console.log(findCharacterRepeatFromLeftToRight('geeksforgeeks'))


//solution using single traversal
function findCharacterRepeatFromLeftToRightSingleTraversal(string){
    const alreadyVisited = Array(256).fill(false);
    let res = -1;
    for(let i=string.length-1;i>=0;i--){
        if(alreadyVisited[string[i].charCodeAt()] === false){
            alreadyVisited[string[i].charCodeAt()] = true
        }else{
            res = i
        }
    }
    return res!= -1 ? string[res] : null;
}
console.log("single traversal");
console.log(findCharacterRepeatFromLeftToRightSingleTraversal("abc"));
console.log(findCharacterRepeatFromLeftToRightSingleTraversal("sanjaysanjay"));
console.log(findCharacterRepeatFromLeftToRightSingleTraversal("geeksforgeeks"));

