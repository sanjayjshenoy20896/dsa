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

/***
 * Complexity analysis:
 * Time Complexity: O(N log N) due to the sorting operation.
Space Complexity: O(N) as new strings and arrays are typically created during the process in JavaScript due to string immutability. 
 */
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
//Time Complexity: O(N * K log K)
//Space Complexity: O(N * K)
